import React from "react";

type HeaderProp = {
  children: React.ReactNode;
  type?: "h1" | "h4";
};

export default function Header({ children, type = "h4" }: HeaderProp) {
  const Heading = type;
  // const size = type === "h1" ? "text-3xl" : "text-2xl";
  const size =
    type === "h1"
      ? "text-3xl sm:text-4xl md:text-5xl lg:text-4xl"
      : "text-2xl sm:text-3xl md:text-4xl lg:text-2xl";
  return (
    <Heading className={`text-heading mx-8 mt-4 text-center font-bold ${size}`}>
      {children}
    </Heading>
  );
}
