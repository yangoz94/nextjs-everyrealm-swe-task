import Link from "next/link";

export default function Home() {
  const LINKS = [
    {
      href: "/data",
      text: "/data",
    },
    {
      href: "/playground",
      text: "/playground",
    },
  ];
  return (
    <main className="grid min-h-[100svh] place-content-center gap-5 transition-colors duration-200">
      <h1 className="font-mono uppercase tracking-widest hover:text-slate-400">
        Hello, World!
      </h1>
      <ul className="grid gap-5">
        {LINKS.map(({ href, text }) => (
          <li key={href} className="text-blue-600 hover:text-red-400 ">
            <Link href={href}>{text}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
