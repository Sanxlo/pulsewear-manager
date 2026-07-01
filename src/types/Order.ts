export interface OrderItem {
  id: number;
  name: string;
  price: number;
  size: string;
}

export interface Order {
  id: number;
  customerName: string;
  email: string;
  address: string;
  phone: string;
  total: number;
  items: OrderItem[];
  status: "Pendiente" | "Confirmado" | "Enviado" | "Recibido";
}