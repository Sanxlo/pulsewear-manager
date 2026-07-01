import { products } from "../data/products";

export const productService = {
  getAll() {
    return products;
  },

  getById(id: number) {
    return products.find((product) => product.id === id);
  },
};