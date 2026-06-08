export interface Order {
  id: number;
  customerName: string;
  email: string;
  address: string;
  phone: string;
  total: number;
  status: "Pendiente" | "Confirmado" | "Enviado";
}