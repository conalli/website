import type { FieldErrors } from "react-hook-form";

type ErrorMessagesProps = {
  errors: FieldErrors<{
    email: string;
    name: string;
    message: string;
    subject?: string | undefined;
  }>;
};

function ErrorMessages({ errors }: ErrorMessagesProps) {
  return (
    <div className="flex flex-col w-full">
      {errors?.name && (
        <p className="underline decoration-red-500 text-xs md:text-md lg:text-lg">
          {errors.name.message}
        </p>
      )}
      {errors.email && (
        <p className="underline decoration-red-500 text-xs md:text-md lg:text-lg">
          {errors.email.message}
        </p>
      )}
      {errors.subject && (
        <p className="underline decoration-red-500 text-xs md:text-md lg:text-lg">
          {errors.subject.message}
        </p>
      )}
      {errors.message && (
        <p className="underline decoration-red-500 text-xs md:text-md lg:text-lg">
          {errors.message.message}
        </p>
      )}
    </div>
  );
}

export default ErrorMessages;
