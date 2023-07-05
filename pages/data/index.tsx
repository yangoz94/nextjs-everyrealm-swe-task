import { Product } from "@/store/store";
import Spinner from "@/components/Spinner";
import { useProducts } from "@/hooks/useProducts";
import BackButton from "@/components/BackButton";
import Modal from "@/components/Modal";
import { useState } from "react";

export default function Data() {
  const { products, isLoading, isError } = useProducts();
  const [isModalOpen, setIsModalOpen] = useState(true);

  if (isLoading) {
    return <Spinner className="absolute inset-0.5" />;
  }

  if (isError) {
    return (
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="grid gap-3 px-3">
          <h2 className="text-xl font-bold">Error while fetching data!</h2>
          <p>Something went wrong. Please try again later...</p>
        </div>
      </Modal>
    );
  }

  return (
    <main className="relative flex min-h-[100svh] flex-col items-center justify-center gap-5 p-5">
      <BackButton
        href="/"
        className="fixed bottom-5 left-5 md:bottom-auto md:top-5"
      />
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
