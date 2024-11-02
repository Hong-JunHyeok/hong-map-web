"use client";

import useToggle from "@/shared/hooks/useToggle";
import { PropsWithChildren } from "react";

import { AiOutlineLeft } from "react-icons/ai";
import { twMerge } from "tailwind-merge";

export default function SideBar({ children }: PropsWithChildren) {
  const [isOpen, toggle] = useToggle(true);

  return (
    <div
      className={twMerge(
        "fixed left-0 top-0 z-[500] flex h-screen bg-white shadow-2xl transition-all ease-in-out duration-300",
        isOpen ? "w-[400px]" : "w-10"
      )}
    >
      {isOpen && children}

      <div
        className={twMerge(
          "w-[20px] flex items-center absolute top-[50%] left-[100%] h-[46px] z-[500] bg-white rounded-r-lg shadow-2xl"
        )}
        onClick={toggle}
      >
        <AiOutlineLeft
          className={twMerge(isOpen ? "rotate-0" : "rotate-180")}
        />
      </div>
    </div>
  );
}
