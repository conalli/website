import { zodResolver } from "@hookform/resolvers/zod";
import { emailSchema, useEmail, type EmailData } from "@hooks";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { combineStyles } from "@utils/styles";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ErrorMessages from "./ErrorMessages";
import LoadingIndicator from "./LoadingIndicator";

function EmailForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<EmailData>({
    resolver: zodResolver(emailSchema),
  });

  const { send, isError, isLoading, isSuccess } = useEmail();

  const buttonStyles = isValid
    ? /*tw*/ "bg-black text-white"
    : /*tw*/ "bg-gray-500 text-gray-100";

  const submitForm = async (data: EmailData): Promise<void> => {
    const email = data as EmailData;
    if (!email.email || !email.message || !email.name) return;
    await send(email);
    reset();
  };

  return (
    <div className="pb-6 pt-10 flex flex-col items-center">
      <form
        onSubmit={handleSubmit(submitForm)}
        className="flex flex-col gap-4 w-4/5 items-between justify-center"
      >
        <label className="text-lg py-2 flex gap-10">
          name*:
          <input
            type="text"
            {...register("name")}
            placeholder="name"
            className="rounded-sm text-black w-3/5 grow px-1 shadow-lg"
          />
        </label>

        <label className="text-lg py-2 flex gap-10">
          email*:
          <input
            type="email"
            {...register("email")}
            placeholder="email"
            className="rounded-sm text-black w-3/5 grow px-1 shadow-lg"
          />
        </label>
        <label className="text-lg py-2 flex gap-8">
          subject:
          <input
            type="text"
            {...register("subject")}
            placeholder="subject"
            className="rounded-sm text-black w-3/5 grow px-1 shadow-lg"
          />
        </label>
        <label className="text-lg py-2 flex gap-3">
          message*:
          <textarea
            rows={6}
            {...register("message")}
            placeholder="message"
            className="rounded-sm text-black w-3/5 grow px-1 shadow-lg"
          />
        </label>
        <ErrorMessages errors={errors} />
        <div className="flex items-center">
          <motion.button
            disabled={isLoading || !isValid}
            className={combineStyles(
              buttonStyles,
              "rounded py-2 px-4 mx-auto flex items-center gap-2 shadow-lg"
            )}
            whileHover={{ scale: isValid ? 1.1 : 1 }}
            whileTap={{ scale: isValid ? 0.9 : 1 }}
          >
            Send <PaperPlaneIcon className="" height={20} width={20} />
          </motion.button>
          <LoadingIndicator
            isError={isError}
            isLoading={isLoading}
            isSuccess={isSuccess}
          />
        </div>
      </form>
    </div>
  );
}

export default EmailForm;
