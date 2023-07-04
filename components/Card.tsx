import React from "react";
import Image from "next/image";

type CardProps = {
  // if we want to make any of them optional, we can do so with ? and conditional rendering in the jsx
  image: string;
  title: string;
  description: string;
  className?: string;
};

export default function Card({
  image,
  title,
  description,
  className,
}: CardProps) {
  return (
    <div
      className={`mx-5 flex max-w-xl flex-col items-center justify-center gap-5 rounded-lg bg-PRIMARY_BG_COLOR p-5 px-5 shadow-lg ${className}`}
    >
      <Image src={image} alt={title} width={200} height={200} />
      <div className="grid gap-3 text-center">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-base text-gray-700">{description}</p>
      </div>
    </div>
  );
}

//props.children is also a good option but since the props are specified in the instructions, I used the above method
