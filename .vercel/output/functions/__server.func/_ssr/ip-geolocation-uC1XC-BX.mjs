import { a as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-BMzjYU4y.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
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
  ipRegion: stringType().optional(),
  ipCountry: stringType().optional(),
  ipIsp: stringType().optional(),
  recaptchaToken: stringType().optional()
});
const submitContactForm = createServerFn({
  method: "POST"
}).inputValidator(contactSchema).handler(createSsrRpc("51496c6ca2b5055341948a46205d4083f7301883d1e1b16d00d2abd04c02d91c"));
async function fetchIpGeolocation() {
  try {
    const res = await fetch("http://ip-api.com/json/?fields=query,country,regionName,city,isp", { signal: AbortSignal.timeout(5e3) });
    if (!res.ok) return {};
    const json = await res.json();
    return {
      ipAddress: json.query || void 0,
      ipCity: json.city || void 0,
      ipRegion: json.regionName || void 0,
      ipCountry: json.country || void 0,
      ipIsp: json.isp || void 0
    };
  } catch {
    return {};
  }
}
export {
  fetchIpGeolocation as f,
  submitContactForm as s
};
