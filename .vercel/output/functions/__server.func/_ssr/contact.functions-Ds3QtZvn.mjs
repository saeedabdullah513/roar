import { a as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-DxKMXmJC.mjs";
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
  message: stringType().min(1, "Message is required")
});
const submitContactForm = createServerFn({
  method: "POST"
}).inputValidator(contactSchema).handler(createSsrRpc("51496c6ca2b5055341948a46205d4083f7301883d1e1b16d00d2abd04c02d91c"));
export {
  submitContactForm as s
};
