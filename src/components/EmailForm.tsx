import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircledIcon,
  CrossCircledIcon,
  MinusCircledIcon,
  PaperPlaneIcon,
} from "@radix-ui/react-icons";
import type { EmailData } from "src/hooks/useEmail";
import { useEmail } from "src/hooks/useEmail";

function EmailForm() {
  const [email, setEmail] = useState({} as EmailData);
  const { send, isError, isLoading, isSuccess } = useEmail();
  console.log(isLoading, isSuccess, isError);
  console.log(email);
  return (
    <div className="pb-6 pt-10 flex flex-col items-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!email.email || !email.message || !email.name) return;
          send(email);
          setEmail({} as EmailData);
        }}
        className="flex flex-col gap-4 w-4/5 items-between justify-center"
      >
        <label className="text-lg py-2 flex gap-10">
          name:
          <input
            name="name"
            type="text"
            required
            value={email.name}
            placeholder="name"
            className="rounded-sm text-black w-3/5 grow px-1 shadow-lg"
            // value={email.name}
            onChange={(e) =>
              setEmail((prev) => {
                return {
                  ...prev,
                  name: e.target.value,
                };
              })
            }
          />
        </label>
        <label className="text-lg py-2 flex gap-10">
          email:
          <input
            name="email"
            type="email"
            required
            placeholder="email"
            className="rounded-sm text-black w-3/5 grow px-1 shadow-lg"
            // value={email.email}
            onChange={(e) =>
              setEmail((prev) => {
                return {
                  ...prev,
                  email: e.target.value,
                };
              })
            }
          />
        </label>
        <label className="text-lg py-2 flex gap-6">
          subject:
          <input
            name="subject"
            type="text"
            required
            placeholder="subject"
            className="rounded-sm text-black w-3/5 grow px-1 shadow-lg"
            // value={email.email}
            onChange={(e) =>
              setEmail((prev) => {
                return {
                  ...prev,
                  subject: e.target.value,
                };
              })
            }
          />
        </label>
        <label className="text-lg py-2 flex gap-3">
          message:
          <textarea
            rows={6}
            required
            name="message"
            placeholder="message"
            className="rounded-sm text-black w-3/5 grow px-1 shadow-lg"
            // value={email.message}
            onChange={(e) =>
              setEmail((prev) => {
                return {
                  ...prev,
                  message: e.target.value,
                };
              })
            }
          />
        </label>
        <div className="flex items-center">
          <motion.button
            disabled={isLoading}
            className="rounded bg-black text-white py-2 px-4 mx-auto flex items-center gap-2 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Send <PaperPlaneIcon className="" height={15} width={15} />
          </motion.button>
          {isError && (
            <CrossCircledIcon className="bg-red-500" height={15} width={15} />
          )}
          {isSuccess && (
            <CheckCircledIcon className="bg-green-500" height={15} width={15} />
          )}
          {isLoading && (
            <MinusCircledIcon
              className="bg-yellow-500"
              height={15}
              width={15}
            />
          )}
        </div>
      </form>
    </div>
  );
}

export default EmailForm;
