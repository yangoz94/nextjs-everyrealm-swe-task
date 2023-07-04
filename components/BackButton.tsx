import Link from "next/link";

type BackButtonProps = {
  href: string;
  text?: string;
  style?: string;
};

export default function BackButton({ href, text, style }: BackButtonProps) {
  return (
    <Link
      href={href}
      className={`rounded-lg bg-black px-4 py-2 text-white transition-colors  duration-300 hover:bg-white hover:text-black ${style}`}
    >
      {text || "Back"}
    </Link>
  );
}
