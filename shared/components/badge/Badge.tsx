import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  className?: string;
}>;

export default function Badge({ children }: Props) {
  return (
    <div className="flex items-center justify-center px-3 py-1 rounded-full bg-primary text-white">
      {children}
    </div>
  );
}
