import { Link } from "react-router-dom";
import { useOrders } from "../context/OrderContext";
import type { Order } from "../types/Order";

const statuses: Order["status"][] = [
  "Pendiente",
  "Confirmado",
  "Enviado",
];

export default function AdminOrdersPage() {
  const {
    orders,
    loading,
    error,
    updateOrderStatus,
  } = useOrders();

  const totalSales = orders.reduce(
    (sum, order) => sum + order.total,
    0
  );

  const pendingOrders = orders.filter(
    (order) => order.status === "Pendiente"
  ).length;

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-8">
        <p>Cargando pedidos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-8">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
        <div>
          <p className="uppercase tracking-widest text-sm text-gray-500 font-semibold">
            Administración
          </p>

          <h1 className="text-5xl font-black mt-2">
            Gestión de pedidos
          </h1>

          <p className="text-gray-600 mt-3">
            Consulta, revisa y actualiza el estado de los pedidos recibidos.
          </p>
        </div>

        <Link
          to="/admin"
          className="bg-black text-white px-6 py-3 rounded-full font-bold text-center"
        >
          Volver al panel
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white border-2 border-gray-200 rounded-3xl p-6 shadow-md">
          <p className="text-gray-500">Pedidos totales</p>
          <p className="text-5xl font-black mt-3">{orders.length}</p>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-3xl p-6 shadow-md">
          <p className="text-gray-500">Pendientes</p>
          <p className="text-5xl font-black mt-3">{pendingOrders}</p>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-3xl p-6 shadow-md">
          <p className="text-gray-500">Ventas registradas</p>
          <p className="text-5xl font-black mt-3">
            {totalSales.toFixed(2)}€
          </p>
        </div>
      </div>

      {orders.length === 0 ? (
        <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-md">
          <p className="text-gray-600">
            Todavía no hay pedidos registrados.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white border-2 border-gray-200 rounded-3xl shadow-md">
          <table className="w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-5">Cliente</th>
                <th className="p-5">Email</th>
                <th className="p-5">Dirección</th>
                <th className="p-5">Teléfono</th>
                <th className="p-5">Total</th>
                <th className="p-5">Estado</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="p-5 font-semibold">
                    {order.customerName}
                  </td>

                  <td className="p-5 text-gray-600">
                    {order.email}
                  </td>

                  <td className="p-5 text-gray-600">
                    {order.address}
                  </td>

                  <td className="p-5 text-gray-600">
                    {order.phone}
                  </td>

                  <td className="p-5 font-bold">
                    {order.total.toFixed(2)}€
                  </td>

                  <td className="p-5">
                    <select
                      value={order.status}
                      onChange={(e) =>
                        updateOrderStatus(
                          order.id,
                          e.target.value as Order["status"]
                        )
                      }
                      className="border rounded-full px-4 py-2 font-semibold"
                    >
                      {statuses.map((status) => (
                        <option
                          key={status}
                          value={status}
                        >
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