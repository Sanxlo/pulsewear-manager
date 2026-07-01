import { useCallback, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { useOrders } from "../context/OrderContext";
import type { Order } from "../types/Order";

const statuses: Order["status"][] = [
  "Pendiente",
  "Confirmado",
  "Enviado",
  "Recibido",
];

export default function AdminOrdersPage() {
  const {
    orders,
    loading,
    error,
    updateOrderStatus,
    deleteOrder,
  } = useOrders();

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("Todos");

  const handleStatusChange = useCallback(
    async (
      orderId: number,
      status: Order["status"]
    ) => {
      if (status === "Recibido") {
        const confirmed = window.confirm(
          "¿Marcar como recibido y eliminar del panel?"
        );

        if (!confirmed) {
          return;
        }

        await deleteOrder(orderId);
        return;
      }

      await updateOrderStatus(orderId, status);
    },
    [deleteOrder, updateOrderStatus]
  );

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const matchesSearch =
        order.customerName.toLowerCase().includes(search.toLowerCase()) ||
        order.email.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "Todos" || order.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [orders, search, statusFilter]);

  const totalSales = orders.reduce(
    (sum, order) => sum + order.total,
    0
  );

  const pendingOrders = orders.filter(
    (order) => order.status === "Pendiente"
  ).length;

  const confirmedOrders = orders.filter(
    (order) => order.status === "Confirmado"
  ).length;

  const shippedOrders = orders.filter(
    (order) => order.status === "Enviado"
  ).length;

  if (loading) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-8">
        <p>Cargando pedidos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-8">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Administración
          </p>

          <h1 className="mt-2 text-5xl font-black">
            Gestión de pedidos
          </h1>

          <p className="mt-3 text-gray-600">
            Consulta pedidos, revisa productos comprados y actualiza estados.
          </p>
        </div>

        <Link
          to="/admin"
          className="rounded-full bg-black px-6 py-3 text-center font-bold text-white transition hover:bg-gray-800"
        >
          Volver al panel
        </Link>
      </div>

      <div className="mb-8 grid gap-6 md:grid-cols-5">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-md">
          <p className="text-gray-500">Pedidos</p>
          <p className="mt-3 text-5xl font-black">{orders.length}</p>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-md">
          <p className="text-gray-500">Pendientes</p>
          <p className="mt-3 text-5xl font-black">{pendingOrders}</p>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-md">
          <p className="text-gray-500">Confirmados</p>
          <p className="mt-3 text-5xl font-black">{confirmedOrders}</p>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-md">
          <p className="text-gray-500">Enviados</p>
          <p className="mt-3 text-5xl font-black">{shippedOrders}</p>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-black p-6 text-white shadow-md">
          <p className="text-gray-400">Ventas</p>
          <p className="mt-3 text-4xl font-black">
            {totalSales.toFixed(2)}€
          </p>
        </div>
      </div>

      <div className="mb-8 rounded-3xl border border-gray-200 bg-white p-5 shadow-md">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="relative">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Buscar por cliente o email..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-12 py-4 outline-none transition focus:border-black focus:bg-white"
            />
          </div>

          <select
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
            className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 outline-none transition focus:border-black focus:bg-white"
          >
            <option value="Todos">Todos los estados</option>
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="mb-6 text-gray-600">
        Mostrando{" "}
        <span className="font-bold text-black">
          {filteredOrders.length}
        </span>{" "}
        pedido(s)
      </p>

      {filteredOrders.length === 0 ? (
        <div className="rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-md">
          <h2 className="text-2xl font-black">
            No se encontraron pedidos
          </h2>

          <p className="mt-2 text-gray-500">
            Prueba con otro cliente, email o estado.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredOrders.map((order) => (
            <article
              key={order.id}
              className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-md"
            >
              <div className="grid gap-6 p-6 lg:grid-cols-[1fr_1.2fr_220px]">
                <div>
                  <p className="text-sm text-gray-500">
                    Cliente
                  </p>

                  <h2 className="mt-1 text-2xl font-black">
                    {order.customerName}
                  </h2>

                  <div className="mt-4 space-y-1 text-gray-600">
                    <p>{order.email}</p>
                    <p>{order.phone}</p>
                    <p>{order.address}</p>
                  </div>
                </div>

                <div>
                  <p className="mb-3 text-sm text-gray-500">
                    Productos comprados
                  </p>

                  {order.items && order.items.length > 0 ? (
                    <div className="space-y-3">
                      {order.items.map((item, index) => (
                        <div
                          key={`${item.id}-${index}`}
                          className="rounded-2xl bg-gray-50 p-4"
                        >
                          <div className="flex justify-between gap-4">
                            <p className="font-bold">
                              {item.name}
                            </p>

                            <p className="font-semibold">
                              {item.price.toFixed(2)}€
                            </p>
                          </div>

                          <p className="mt-1 text-sm text-gray-500">
                            Talla:{" "}
                            <span className="font-bold text-black">
                              {item.size}
                            </span>
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-400">
                      Este pedido no tiene productos registrados.
                    </p>
                  )}
                </div>

                <div className="flex flex-col justify-between gap-6 lg:text-right">
                  <div>
                    <p className="text-sm text-gray-500">
                      Total
                    </p>

                    <p className="mt-1 text-4xl font-black">
                      {order.total.toFixed(2)}€
                    </p>
                  </div>

                  <div>
                    <p className="mb-2 text-sm text-gray-500">
                      Estado
                    </p>

                    <select
                      value={order.status}
                      onChange={(event) =>
                        handleStatusChange(
                          order.id,
                          event.target.value as Order["status"]
                        )
                      }
                      className="w-full rounded-full border border-gray-300 px-4 py-3 font-bold outline-none transition focus:border-black"
                    >
                      {statuses.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}