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

sgMail.setApiKey(process.env.SENDGRID_APIKEY ?? "");

export default async function email(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.headers["content-type"] !== "application/json") {
    response.statusCode = 400;
    return response.end();
  }
  try {
    const { email, name, subject, message } = request.body as EmailData;
    const msg: SendGridMessage = {
      to: "contact@conalli.info",
      from: "contact@conalli.info",
      subject: subject ?? "",
      text: `from - ${name}; reply to - ${email}; message - ${message}`,
    };
    const res = await sgMail.send(msg);
    console.log(res);
    if (res[0].statusCode !== 200) {
      response.statusCode = 400;
      return response.send(JSON.stringify({ status: "error" }));
    }
    response.statusCode = 200;
    return response.send(JSON.stringify({ status: "success" }));
  } catch (error) {
    console.error(error);
    response.statusCode = 400;
    return response.send(JSON.stringify({ status: "error" }));
  }
}
