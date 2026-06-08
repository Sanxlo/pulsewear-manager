import { useOrders } from "../context/OrderContext";
import type { Order } from "../types/Order";

const statuses: Order["status"][] = ["Pendiente", "Confirmado", "Enviado"];

export default function AdminOrdersPage() {
  const { orders, updateOrderStatus } = useOrders();

  return (
    <div>
      <h1 className="text-4xl font-black mb-8">Gestión de pedidos</h1>

      {orders.length === 0 ? (
        <p className="text-gray-600">Todavía no hay pedidos registrados.</p>
      ) : (
        <div className="overflow-x-auto border rounded-2xl">
          <table className="w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4">Cliente</th>
                <th className="p-4">Email</th>
                <th className="p-4">Total</th>
                <th className="p-4">Estado</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-t">
                  <td className="p-4">{order.customerName}</td>
                  <td className="p-4">{order.email}</td>
                  <td className="p-4">{order.total.toFixed(2)}€</td>
                  <td className="p-4">
                    <select
                      value={order.status}
                      onChange={(e) =>
                        updateOrderStatus(
                          order.id,
                          e.target.value as Order["status"]
                        )
                      }
                      className="border rounded-lg px-3 py-2"
                    >
                      {statuses.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}