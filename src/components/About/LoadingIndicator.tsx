import {
  CheckCircledIcon,
  CrossCircledIcon,
  MinusCircledIcon,
} from "@radix-ui/react-icons";

function LoadingIndicator({
  isLoading,
  isError,
  isSuccess,
}: {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}) {
  return (
    <div>
      {isError && (
        <CrossCircledIcon className="text-red-500" height={20} width={20} />
      )}
      {isSuccess && (
        <CheckCircledIcon className="text-green-500" height={20} width={20} />
      )}
      {isLoading && (
        <MinusCircledIcon className="text-yellow-500" height={20} width={20} />
      )}
    </div>
  );
}

export default LoadingIndicator;
