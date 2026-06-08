import { orders } from "../data/orders";
import type { Order } from "../types/Order";

interface CreateOrderData {
  customerName: string;
  email: string;
  address: string;
  phone: string;
  total: number;
}

export const orderService = {
  getAll() {
    return orders;
  },

  create(data: CreateOrderData) {
    const newOrder: Order = {
      id: Date.now(),
      customerName: data.customerName,
      email: data.email,
      address: data.address,
      phone: data.phone,
      total: data.total,
      status: "Pendiente",
    };

    orders.push(newOrder);

    return newOrder;
  },

  updateStatus(id: number, status: Order["status"]) {
    const order = orders.find((item) => item.id === id);

    if (!order) {
      return null;
    }

    order.status = status;

    return order;
  },
};