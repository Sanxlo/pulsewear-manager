import type { Product } from "../types/Product";
import type { Order } from "../types/Order";

const API_URL =
  import.meta.env.PROD
    ? "/api/v1"
    : "http://localhost:3001/api/v1";
    
export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${API_URL}/products`);

  if (!response.ok) {
    throw new Error("Error al obtener productos");
  }

  return response.json();
}

export async function getOrders(): Promise<Order[]> {
  const response = await fetch(`${API_URL}/orders`);

  if (!response.ok) {
    throw new Error("Error al obtener pedidos");
  }

  return response.json();
}
export async function deleteOrder(
  id: number
): Promise<void> {
  const response = await fetch(
    `${API_URL}/orders/${id}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error("Error al eliminar pedido");
  }
}
export async function createOrder(data: {
  customerName: string;
  email: string;
  address: string;
  phone: string;
  total: number;
  items: {
    id: number;
    name: string;
    price: number;
    size: string;
  }[];
}): Promise<Order> {
  const response = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Error al crear pedido");
  }

  return response.json();
}

export async function updateOrderStatus(
  id: number,
  status: Order["status"]
): Promise<Order> {
  const response = await fetch(`${API_URL}/orders/${id}/status`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status }),
  });

  if (!response.ok) {
    throw new Error("Error al actualizar pedido");
  }

  return response.json();
}