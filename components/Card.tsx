import React from "react";
import Image from "next/image";

//props.children is also a good option for card components in general but since the props are specified in the instructions, I sticked to method below
type CardProps = {
  image?: string; // optional
  title: string;
  description: string;
  className?: string; // optional
};

export default function Card({
  image,
  title,
  description,
  className,
}: CardProps) {
  return (
    <div
      className={`mx-5 flex max-w-xl flex-col items-center justify-center gap-5 rounded-lg bg-white p-5 shadow-lg ${className}`}
    >
      {image && <Image src={image} alt={title} width={200} height={200} priority={true} />}
      <div className="grid gap-5 text-center">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}
