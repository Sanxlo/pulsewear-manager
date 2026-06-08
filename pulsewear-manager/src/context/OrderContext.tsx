import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import type { Order } from "../types/Order";

interface CreateOrderData {
  customerName: string;
  email: string;
  address: string;
  phone: string;
  total: number;
}

interface OrderContextType {
  orders: Order[];
  createOrder: (data: CreateOrderData) => void;
  updateOrderStatus: (id: number, status: Order["status"]) => void;
}

const OrderContext = createContext<OrderContextType | null>(null);

export function OrderProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<Order[]>([]);

  const createOrder = (data: CreateOrderData) => {
    const newOrder: Order = {
      id: Date.now(),
      customerName: data.customerName,
      email: data.email,
      address: data.address,
      phone: data.phone,
      total: data.total,
      status: "Pendiente",
    };

    setOrders((prev) => [...prev, newOrder]);
  };

  const updateOrderStatus = (id: number, status: Order["status"]) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status } : order
      )
    );
  };

  return (
    <OrderContext.Provider value={{ orders, createOrder, updateOrderStatus }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders(): OrderContextType {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error("useOrders debe utilizarse dentro de OrderProvider");
  }

  return context;
}