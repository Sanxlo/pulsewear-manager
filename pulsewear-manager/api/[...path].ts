type ApiRequest = {
  method?: string;
  url?: string;
  body?: {
    status?: string;
    [key: string]: unknown;
  };
};

type ApiResponse = {
  status: (code: number) => {
    json: (data: unknown) => void;
  };
};

const products = [
  {
    id: 1,
    name: "Sudadera active",
    category: "Sudaderas",
    price: 59.99,
    rating: 4.9,
    image: "/products/hoodie.webp",
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
    image: "/products/jacket.webp",
  },
];

let orders: unknown[] = [];

export default function handler(
  req: ApiRequest,
  res: ApiResponse
) {
  const url = req.url || "";

  if (req.method === "GET" && url.includes("/api/v1/products")) {
    return res.status(200).json(products);
  }

  if (req.method === "GET" && url.includes("/api/v1/orders")) {
    return res.status(200).json(orders);
  }

  if (req.method === "POST" && url.includes("/api/v1/orders")) {
    const newOrder = {
      id: Date.now(),
      ...req.body,
      status: "Pendiente",
    };

    orders = [...orders, newOrder];

    return res.status(201).json(newOrder);
  }

  return res.status(404).json({
    message: "Ruta no encontrada",
  });
}