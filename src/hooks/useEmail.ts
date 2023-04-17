import { z } from "astro/zod";
import { useEffect, useState } from "react";

export const emailSchema = z.object({
  name: z.string().min(2).max(64),
  email: z.string().email().max(64),
  subject: z.string().max(256).optional(),
  message: z.string().min(10),
});

export type EmailData = z.infer<typeof emailSchema>;

const sendEmail = async (data: EmailData) => {
  const resp = await fetch("/api/email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return resp.status === 200;
};

export const useEmail = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isSuccess) setIsSuccess(false);
      if (isError) setIsError(false);
    }, 4000);
    return () => clearTimeout(timeout);
  }, [isSuccess, isError]);

  const send = async (data: EmailData) => {
    setIsLoading(true);
    const success = await sendEmail(data);
    setIsLoading(false);
    if (!success) setIsError(true);
    else setIsSuccess(true);
  };

  return { send, isSuccess, isLoading, isError };
};
