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
});

export type ContactData = z.infer<typeof contactSchema>;

// Add or remove recipient emails here:
const recipients = [
  "sales@thebigmouthpr.com",
  "abdullah.saeed@canvasdigital.org",
];

export const submitContactForm = createServerFn({ method: "POST" })
  .inputValidator(contactSchema)
  .handler(async ({ data }) => {
    const { name, email, company, role, phone, service, message } = data;

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
