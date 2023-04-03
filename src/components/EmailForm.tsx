import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { PaperPlaneIcon } from "@radix-ui/react-icons";

const sendEmail = () => {
  console.log("sent email");
};

function EmailForm() {
  const form = useRef<HTMLFormElement>(null);
  const [messageText, setMessageText] = useState({
    name: "",
    email: "",
    message: "",
  });
  return (
    <div className="py-6">
      <form
        ref={form}
        autoComplete="off"
        onSubmit={sendEmail}
        className="flex flex-col gap-4 w-full items-between"
      >
        <label className="text-lg py-2 flex gap-10">
          Your name.
          <input
            name="name"
            type="text"
            required
            placeholder="name"
            className="rounded-sm text-black  w-3/5"
            value={messageText.name}
            onChange={(e) =>
              setMessageText((prev) => {
                return {
                  ...prev,
                  name: e.target.value,
                };
              })
            }
          />
        </label>
        <label className="text-lg py-2 flex gap-10">
          Your email.
          <input
            name="name"
            type="email"
            required
            placeholder="email"
            className="rounded-sm text-black w-3/5"
            value={messageText.email}
            onChange={(e) =>
              setMessageText((prev) => {
                return {
                  ...prev,
                  email: e.target.value,
                };
              })
            }
          />
        </label>
        <label className="text-lg py-2 flex gap-3">
          Your message.
          <textarea
            rows={6}
            required
            name="message"
            placeholder="message"
            className="rounded-sm text-black  w-3/5"
            value={messageText.message}
            onChange={(e) =>
              setMessageText((prev) => {
                return {
                  ...prev,
                  message: e.target.value,
                };
              })
            }
          />
        </label>
        <motion.button
          className="rounded bg-black text-white py-2 px-4 mx-auto flex items-center gap-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Send <PaperPlaneIcon className="" height={15} width={15} />
        </motion.button>
      </form>
    </div>
  );
}

export default EmailForm;
