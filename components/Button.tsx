import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
};

export default function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button
      className={`rounded-lg bg-[white] px-4 py-2 transition-all duration-300 hover:invert active:scale-95 active:shadow-lg ${className} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
