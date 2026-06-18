import { T as TSS_SERVER_FUNCTION, a as createServerFn } from "./server-Da9bkkla.mjs";
import { n as nodemailer } from "../_libs/nodemailer.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "events";
import "url";
import "fs";
import "http";
import "https";
import "zlib";
import "net";
import "dns";
import "os";
import "path";
import "tls";
import "child_process";
var createServerRpc = (serverFnMeta, splitImportFn) => {
  const url = "/_serverFn/" + serverFnMeta.id;
  return Object.assign(splitImportFn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const contactSchema = objectType({
  name: stringType().min(1, "Name is required"),
  email: stringType().email("Valid email is required"),
  company: stringType().min(1, "Company is required"),
  role: stringType().min(1, "Role is required"),
  phone: stringType().optional(),
  service: stringType().min(1, "Service is required"),
  message: stringType().min(1, "Message is required"),
  ipAddress: stringType().optional(),
  ipCity: stringType().optional(),
  ipCountry: stringType().optional(),
  recaptchaToken: stringType().optional()
});
const recipients = ["sales@thebigmouthpr.com", "abdullah.saeed@canvasdigital.org", "arsalan.mustafa@canvasdigital.org", "noman@canvasdigital.net"];
const submitContactForm_createServerFn_handler = createServerRpc({
  id: "51496c6ca2b5055341948a46205d4083f7301883d1e1b16d00d2abd04c02d91c",
  name: "submitContactForm",
  filename: "src/lib/api/contact.functions.ts"
}, (opts) => submitContactForm.__executeServer(opts));
const submitContactForm = createServerFn({
  method: "POST"
}).inputValidator(contactSchema).handler(submitContactForm_createServerFn_handler, async ({
  data
}) => {
  const {
    name,
    email,
    company,
    role,
    phone,
    service,
    message,
    ipAddress,
    ipCity,
    ipCountry,
    recaptchaToken
  } = data;
  if (recaptchaToken) {
    const verify = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: `secret=6LdjRCYtAAAAAD9gh4qFsXwB0BMz2Z3NcFT4sV_x&response=${encodeURIComponent(recaptchaToken)}`
    });
    const result = await verify.json();
    if (!result.success) {
      return {
        success: false,
        error: "reCAPTCHA verification failed. Please try again."
      };
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
    auth: {
      user: smtpUser,
      pass: smtpPass
    }
  });
  const geoRow = ipAddress ? `<tr style="background:#f8f9fa"><td style="padding:8px;font-weight:bold;border-top:1px solid #ddd">IP Address</td><td style="padding:8px;border-top:1px solid #ddd">${ipAddress}</td></tr>
         ${ipCity ? `<tr style="background:#f8f9fa"><td style="padding:8px;font-weight:bold">City</td><td style="padding:8px">${ipCity}</td></tr>` : ""}
         ${ipCountry ? `<tr style="background:#f8f9fa"><td style="padding:8px;font-weight:bold">Country</td><td style="padding:8px">${ipCountry}</td></tr>` : ""}` : "";
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
    html
  });
  return {
    success: true
  };
});
export {
  submitContactForm_createServerFn_handler
};
