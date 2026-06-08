import { mockProducts } from "../utils/mockProducts";

export function useProducts() {
  return {
    products: mockProducts,
  };
}