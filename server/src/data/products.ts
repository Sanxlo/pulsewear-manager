import type { Product } from "../types/Product";

export const products: Product[] = [
  {
    id: 1,
    name: "Sudadera active",
    category: "Sudaderas",
    price: 59.99,
    rating: 4.9,
    image:"/products/hoodie.webp",
  },
  {
    id: 2,
    name: "Camiseta Training Core",
    category: "Entrenamiento",
    price: 29.99,
    rating: 4.7,
    image: "/products/camiseta.webp",
  },
  {
    id: 3,
    name: "Short Deportivo Flex",
    category: "Pantalones",
    price: 34.99,
    rating: 4.8,
    image: "/products/short.webp",
  },
  {
    id: 4,
    name: "Gorra Urban Sport",
    category: "Accesorios",
    price: 19.99,
    rating: 4.6,
    image: "/products/gorra.webp",
  },
  {
    id: 5,
    name: "Leggings Motion",
    category: "Entrenamiento",
    price: 39.99,
    rating: 4.8,
    image: "/products/leggins.webp",
  },
  {
    id: 6,
    name: "Chaqueta Active",
    category: "Chaquetas",
    price: 69.99,
    rating: 5,
    image: "/products/jacket.jpg",
  },
];