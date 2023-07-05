import { Product } from "@/store/store";
import Spinner from "@/components/Spinner";
import { useProducts } from "@/hooks/useProducts";
import BackButton from "@/components/BackButton";

export default function Data() {
  const { products, isLoading, isError } = useProducts();

  if (isLoading) {
    return <Spinner className="absolute inset-0.5" />;
  }

  if (isError) {
    // We can replace the following line with our modal, or a Toast component
    return <p>Something went wrong</p>;
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center gap-5 p-5">
      <BackButton href="/" className="absolute left-5 top-5" />
      <h1 className="text-xl font-extrabold">Welcome to the data page!</h1>
      <p>Below you can find all the data fetched with React Query;</p>
      <ul className="grid gap-3">
        {(products as Product[]).map((product) => (
          <li key={product.id} className="before:pr-2 before:content-['✔️']">
            {product.title} - {product.price}
          </li>
        ))}
      </ul>
    </main>
  );
}
