import sgMail from "@sendgrid/mail";
import type { VercelRequest, VercelResponse } from "@vercel/node";
import type { EmailData } from "src/hooks";

export const config = {
  runtime: "nodejs",
};

type SendGridMessage = {
  to: string;
  from: string;
  subject: string;
  text: string;
  html?: string;
};

sgMail.setApiKey(import.meta.env.SENDGRID_APIKEY);

export default async function async(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.headers["content-type"] !== "application/json") {
    response.statusCode = 400;
    return response.end();
  }
  const { email, name, subject, message } = JSON.parse(
    request.body.json()
  ) as EmailData;
  const msg: SendGridMessage = {
    to: "contact@conalli.info",
    from: "contact@conalli.info",
    subject: subject ?? "",
    text: `from - ${name}; reply to - ${email}; message - ${message}`,
  };
  try {
    sgMail.send(msg);
  } catch (error) {
    console.error(error);
    response.statusCode = 400;
    return response.send(JSON.stringify({ status: "error" }));
  }
  response.statusCode = 200;
  return response.send(JSON.stringify({ status: "success" }));
}
