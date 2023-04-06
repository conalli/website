import { motion } from "framer-motion";
import {
  CheckCircledIcon,
  CrossCircledIcon,
  MinusCircledIcon,
  PaperPlaneIcon,
} from "@radix-ui/react-icons";
import { useEmail, EmailData, emailSchema } from "src/hooks";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessages from "./ErrorMessages";
import { combineStyles } from "@utils/styles";

function EmailForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<EmailData>({
    resolver: zodResolver(emailSchema),
  });
  const { send, isError, isLoading, isSuccess } = useEmail();
  const buttonStyles = isValid
    ? /*tw*/ "bg-black text-white"
    : /*tw*/ "bg-gray-500 text-gray-100";
  const submitForm = async (data: EmailData): Promise<void> => {
    const email = data as EmailData;
    console.log(email);
    if (!email.email || !email.message || !email.name) return;
    await send(email);
  };

  return (
    <div className="pb-6 pt-10 flex flex-col items-center">
      <form
        onSubmit={handleSubmit(submitForm)}
        className="flex flex-col gap-4 w-4/5 items-between justify-center"
      >
        <label className="text-lg py-2 flex gap-10">
          name:
          <input
            type="text"
            {...register("name")}
            placeholder="name"
            className="rounded-sm text-black w-3/5 grow px-1 shadow-lg"
          />
        </label>

        <label className="text-lg py-2 flex gap-10">
          email:
          <input
            type="email"
            {...register("email")}
            placeholder="email"
            className="rounded-sm text-black w-3/5 grow px-1 shadow-lg"
          />
        </label>
        <label className="text-lg py-2 flex gap-6">
          subject:
          <input
            type="text"
            {...register("subject")}
            placeholder="subject"
            className="rounded-sm text-black w-3/5 grow px-1 shadow-lg"
          />
        </label>
        <label className="text-lg py-2 flex gap-3">
          message:
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
