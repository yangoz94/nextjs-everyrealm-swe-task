import { useCallback } from "react";
import { useQuery } from "react-query";
import { useStore } from "../store/store";

export function useProducts() {
  const API_URL = "https://fakestoreapi.com/products";
  const TEN_SECONDS_IN_MS = 10000;
  const setProducts = useStore((state) => state.setProducts);

  const fetchFromAPI = useCallback(async () => {
    const res = await fetch(API_URL);
    return await res.json();
  }, []);

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery("products", fetchFromAPI, {
    staleTime: TEN_SECONDS_IN_MS,
    onSuccess: (data) => setProducts(data),
  });

  return { products, isLoading, isError };
}
