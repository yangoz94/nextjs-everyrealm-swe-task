import Card from "@/components/Card";
import BackButton from "@/components/BackButton";

export default function Playground() {
  return (
    <main className="relative flex min-h-screen flex-col items-center gap-5 bg-red-200 py-5">
      <BackButton href="/" className="absolute left-5 top-5" />
      <h1 className="extrabold text-2xl">Playground for Components</h1>
      <Card
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
        title="Sample Card Component"
        image="/next.svg"
      />
    </main>
  );
}
