import sgMail from "@sendgrid/mail";
import type { APIRoute } from "astro";
import type { EmailData } from "src/hooks";

type SendGridMessage = {
  to: string;
  from: string;
  subject: string;
  text: string;
  html?: string;
};

sgMail.setApiKey(import.meta.env.SENDGRID_APIKEY);

export const POST: APIRoute = async ({ request }) => {
  const { email, name, subject, message } = (await request.json()) as EmailData;
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
    return new Response(JSON.stringify({ status: "error" }), { status: 400 });
  }
  return new Response(JSON.stringify({ status: "success" }), { status: 200 });
};
