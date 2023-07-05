import { Product } from "@/store/store";
import Spinner from "@/components/Spinner";
import { useProducts } from "@/hooks/useProducts";
import BackButton from "@/components/BackButton";
import Modal from "@/components/Modal";
import { useState } from "react";
import { useStore } from "@/store/store";
import Button from "@/components/Button";

export default function Data() {
  const { isLoading, isError } = useProducts();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const products = useStore((state) => state.products);
  const removeProduct = useStore((state) => state.removeProduct);
  const setProducts = useStore((state) => state.setProducts);

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
    <main className="relative flex min-h-[100svh] flex-col items-center gap-5 p-5">
      <BackButton
        href="/"
        className="fixed bottom-5 left-5 md:bottom-auto md:top-5"
      />
      <h1 className="text-xl font-extrabold">Welcome to the data page!</h1>
      <p>Below you can find all the data fetched with React Query;</p>
      {products.length === 0 ? (
        <p>Sorry, no products found...</p>
      ) : (
        <ul className="grid min-w-[70%] gap-3">
          {(products as Product[]).map((product) => (
            <li
              key={product.id}
              className="flex items-center before:pr-2 before:content-['✔️']"
            >
              <Button
                onClick={() => {
                  removeProduct(product.id);
                  setProducts(products.filter((p) => p.id !== product.id));
                }}
                className="mr-3 bg-red-500 text-white hover:bg-red-600 hover:invert-0 "
              >
                Remove
              </Button>
              {product.title} - {product.price}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
