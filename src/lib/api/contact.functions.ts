import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import nodemailer from "nodemailer";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().min(1, "Company is required"),
  role: z.string().min(1, "Role is required"),
  phone: z.string().optional(),
  service: z.string().min(1, "Service is required"),
  message: z.string().min(1, "Message is required"),
  ipAddress: z.string().optional(),
  ipCity: z.string().optional(),
  ipRegion: z.string().optional(),
  ipCountry: z.string().optional(),
  ipIsp: z.string().optional(),
  recaptchaToken: z.string().optional(),
});

export type ContactData = z.infer<typeof contactSchema>;

const recipients = [
  "sales@thebigmouthpr.com",
  "abdullah.saeed@canvasdigital.org",
  "arsalan.mustafa@canvasdigital.org",
  "noman@canvasdigital.net"
];

async function lookupGeo(ip: string) {
  try {
    const res = await fetch(`https://ipwhois.app/json/${ip}`, { signal: AbortSignal.timeout(5000) });
    if (!res.ok) return null;
    const j = await res.json() as any;
    if (j.success === false) return null;
    return { city: j.city || "", region: j.region || "", country: j.country || "", isp: j.isp || "" };
  } catch {
    return null;
  }
}

export const submitContactForm = createServerFn({ method: "POST" })
  .inputValidator(contactSchema)
  .handler(async ({ data }) => {
    const { name, email, company, role, phone, service, message, ipAddress, ipCity, ipRegion, ipCountry, ipIsp, recaptchaToken } = data;

    if (recaptchaToken) {
      const verify = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=6LdjRCYtAAAAAD9gh4qFsXwB0BMz2Z3NcFT4sV_x&response=${encodeURIComponent(recaptchaToken)}`,
      });
      const result = await verify.json() as { success: boolean };
      if (!result.success) return { success: false, error: "reCAPTCHA failed." };
    }

    let geoIp = ipAddress || "";
    let geoCity = ipCity || "";
    let geoRegion = ipRegion || "";
    let geoCountry = ipCountry || "";
    let geoIsp = ipIsp || "";

    if (!geoIp) {
      try {
        const ipRes = await fetch("https://api.ipify.org?format=json", { signal: AbortSignal.timeout(3000) });
        if (ipRes.ok) {
          const ipJson = await ipRes.json() as { ip: string };
          geoIp = ipJson.ip || "";
        }
      } catch {}
    }

    if (geoIp && !geoCity) {
      const geo = await lookupGeo(geoIp);
      if (geo) {
        geoCity = geo.city;
        geoRegion = geo.region;
        geoCountry = geo.country;
        geoIsp = geo.isp;
      }
    }

    const smtpHost = "smtp.titan.email";
    const smtpPort = 587;
    const smtpUser = "sales@thebigmouthpr.com";
    const smtpPass = "QSXCR2!1cxv";

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: false,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const geoRow = geoIp
      ? `<tr style="background:#f8f9fa"><td style="padding:8px;font-weight:bold;border-top:1px solid #ddd">IP Address</td><td style="padding:8px;border-top:1px solid #ddd">${geoIp}</td></tr>
         ${geoCity ? `<tr style="background:#f8f9fa"><td style="padding:8px;font-weight:bold">City</td><td style="padding:8px">${geoCity}</td></tr>` : ""}
         ${geoRegion ? `<tr style="background:#f8f9fa"><td style="padding:8px;font-weight:bold">Region</td><td style="padding:8px">${geoRegion}</td></tr>` : ""}
         ${geoCountry ? `<tr style="background:#f8f9fa"><td style="padding:8px;font-weight:bold">Country</td><td style="padding:8px">${geoCountry}</td></tr>` : ""}
         ${geoIsp ? `<tr style="background:#f8f9fa"><td style="padding:8px;font-weight:bold">ISP</td><td style="padding:8px">${geoIsp}</td></tr>` : ""}`
      : "";

    const html = `
      <h2>New contact form submission — thebigmouthpr.com</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px">
        <tr><td style="padding:8px;font-weight:bold">Name</td><td style="padding:8px">${name}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Email</td><td style="padding:8px">${email}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Company</td><td style="padding:8px">${company}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Role</td><td style="padding:8px">${role}</td></tr>
        ${phone ? `<tr><td style="padding:8px;font-weight:bold">Phone</td><td style="padding:8px">${phone}</td></tr>` : ""}
        <tr><td style="padding:8px;font-weight:bold">Service</td><td style="padding:8px">${service}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Message</td><td style="padding:8px">${message}</td></tr>
        ${geoRow}
      </table>
    `;

    await transporter.sendMail({
      from: `"The Big Mouth PR" <${smtpUser}>`,
      to: recipients.join(", "),
      replyTo: email,
      subject: `New inquiry from ${name} — ${service}`,
      html,
    });

    return { success: true };
  });
