import { useRef, useState } from "react";
import { motion } from "framer-motion";

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
    <div className="">
      <form
        ref={form}
        autoComplete="off"
        onSubmit={sendEmail}
        className="flex flex-col w-full"
      >
        <label className="text-lg py-2 flex gap-10">
          Your name.
          <input
            name="name"
            type="text"
            required
            placeholder="name"
            className="rounded-sm"
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
            className="rounded-sm"
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
            className="rounded-sm"
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
          className="rounded-sm bg-white text-blue-500 w-10 ml-48"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Send
        </motion.button>
      </form>
    </div>
  );
}

export default EmailForm;
