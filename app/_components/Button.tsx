import React from "react";

type ButtonProp = {
  children: React.ReactNode;
  type: "primary" | "secondary";
  shadowColor: string;
};

export default function Button({ children, type, shadowColor }: ButtonProp) {
  return (
    <button
      className={`${type === "primary" ? "bg-primary" : "bg-secondary"} text-body cursor-pointer rounded-full p-2.5 font-bold transition active:translate-y-1 active:shadow-none lg:w-60`}
      style={{ boxShadow: `0 4px 0 ${shadowColor}` }}
    >
      {children}
    </button>
  );
}
