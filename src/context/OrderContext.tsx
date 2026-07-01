/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Order } from "../types/Order";
import {
  createOrder as createOrderRequest,
  deleteOrder as deleteOrderRequest,
  getOrders,
  updateOrderStatus as updateOrderStatusRequest,
} from "../api/client";

interface OrderItemData {
  id: number;
  name: string;
  price: number;
  size: string;
}

interface CreateOrderData {
  customerName: string;
  email: string;
  address: string;
  phone: string;
  total: number;
  items: OrderItemData[];
}

interface OrderContextType {
  orders: Order[];
  loading: boolean;
  error: string;
  createOrder: (data: CreateOrderData) => Promise<void>;
  updateOrderStatus: (
    id: number,
    status: Order["status"]
  ) => Promise<void>;
  deleteOrder: (id: number) => Promise<void>;
}

const OrderContext = createContext<OrderContextType | null>(null);

export function OrderProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadOrders() {
      try {
        const data = await getOrders();
        setOrders(data);
      } catch {
        setError("No se pudieron cargar los pedidos.");
      } finally {
        setLoading(false);
      }
    }

    loadOrders();
  }, []);

  const createOrder = async (
    data: CreateOrderData
  ) => {
    const newOrder = await createOrderRequest(data);

    setOrders((prev) => [
      ...prev,
      newOrder,
    ]);
  };

  const updateOrderStatus = async (
    id: number,
    status: Order["status"]
  ) => {
    const updatedOrder =
      await updateOrderStatusRequest(id, status);

    setOrders((prev) =>
      prev.map((order) =>
        order.id === id
          ? updatedOrder
          : order
      )
    );
  };

  const deleteOrder = async (
    id: number
  ) => {
    await deleteOrderRequest(id);

    setOrders((prev) =>
      prev.filter(
        (order) => order.id !== id
      )
    );
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        loading,
        error,
        createOrder,
        updateOrderStatus,
        deleteOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders(): OrderContextType {
  const context =
    useContext(OrderContext);

  if (!context) {
    throw new Error(
      "useOrders debe utilizarse dentro de OrderProvider"
    );
  }

  return context;
}