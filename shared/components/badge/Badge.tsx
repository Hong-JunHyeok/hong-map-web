import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import Text from "../text";

type Props = PropsWithChildren<{
  className?: string;
}>;

export default function Badge({ children, className }: Props) {
  return (
    <div
      className={twMerge(
        "flex items-center justify-center px-3 py-1 rounded-full bg-primary shadow-md hover:shadow-lg transition-shadow duration-300",
        className
      )}
    >
      <Text className="text-white">{children}</Text>
    </div>
  );
}
