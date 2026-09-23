import React from "react";

type ParagarphProp = {
  children: React.ReactNode;
  marginTop?: "p1" | "p2";
};

export default function Paragarph({ children, marginTop }: ParagarphProp) {
  const mT = marginTop === "p1" ? "mt-5" : "";
  return (
    <p className={`text-heading mx-7 text-center text-base opacity-50 ${mT}`}>
      {children}
    </p>
  );
}

export function ParagarphFooter({ children, marginTop = "p1" }: ParagarphProp) {
  const mT = marginTop === "p1" ? "mt-5" : "";
  return (
    <p
      className={`hover:text-primary text-heading mx-7 cursor-pointer text-center text-base opacity-50 ${mT}`}
    >
      {children}
    </p>
  );
}
