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
    <div className="pb-6 pt-10 flex flex-col items-center">
      <form
        ref={form}
        autoComplete="off"
        onSubmit={sendEmail}
        className="flex flex-col gap-4 w-4/5 items-between justify-center"
      >
        <label className="text-lg py-2 flex gap-10">
          name:
          <input
            name="name"
            type="text"
            required
            placeholder="name"
            className="rounded-sm text-black w-3/5 grow px-1 shadow-lg"
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
          email:
          <input
            name="name"
            type="email"
            required
            placeholder="email"
            className="rounded-sm text-black w-3/5 grow px-1 shadow-lg"
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
          message:
          <textarea
            rows={6}
            required
            name="message"
            placeholder="message"
            className="rounded-sm text-black w-3/5 grow px-1 shadow-lg"
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
          className="rounded bg-black text-white py-2 px-4 mx-auto flex items-center gap-2 shadow-lg"
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
