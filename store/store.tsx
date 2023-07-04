import { create } from "zustand";

export type Product = {
  // added extra fields to comply with the API
  id: number;
  title: string;
  price: number;
  name: string;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type Store = {
  products: Product[];
  // methods included in the task instruction
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
  updateProduct: (id: number, product: Product) => void;
  setProducts: (products: Product[]) => void;
};

export const useStore = create<Store>((set) => ({
  products: [],

  addProduct: (product) =>
    set((state) => ({
      products: [...state.products, product],
    })),

  removeProduct: (id) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    })),

  updateProduct: (id, product) =>
    set((state) => ({
      products: state.products.map((p) => (p.id === id ? product : p)),
    })),

  setProducts: (products) =>
    set({
      products,
    }),
}));
