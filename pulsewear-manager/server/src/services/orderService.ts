import fs from "fs";
import path from "path";
import type { Order } from "../types/Order";

const ordersFilePath = path.join(process.cwd(), "server/src/data/orders.json");

interface CreateOrderData {
  customerName: string;
  email: string;
  address: string;
  phone: string;
  total: number;
}

function readOrders(): Order[] {
  const data = fs.readFileSync(ordersFilePath, "utf-8");
  return JSON.parse(data) as Order[];
}

function writeOrders(orders: Order[]) {
  fs.writeFileSync(ordersFilePath, JSON.stringify(orders, null, 2));
}

export const orderService = {
  getAll() {
    return readOrders();
  },

  create(data: CreateOrderData) {
    const orders = readOrders();

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
    writeOrders(orders);

    return newOrder;
  },

  updateStatus(id: number, status: Order["status"]) {
    const orders = readOrders();

    const orderIndex = orders.findIndex((order) => order.id === id);

    if (orderIndex === -1) {
      return null;
    }

    orders[orderIndex].status = status;
    writeOrders(orders);

    return orders[orderIndex];
  },
};