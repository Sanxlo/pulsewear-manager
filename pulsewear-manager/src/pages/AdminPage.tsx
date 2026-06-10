import { Link } from "react-router-dom";
import { useOrders } from "../context/OrderContext";
import { useProducts } from "../hooks/useProducts";

export default function AdminPage() {
  const {
    orders,
    loading: ordersLoading,
    error: ordersError,
  } = useOrders();

  const {
    products,
    loading: productsLoading,
    error: productsError,
  } = useProducts();

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

  if (ordersLoading || productsLoading) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-8">
        <p>Cargando panel de administración...</p>
      </div>
    );
  }

  if (ordersError || productsError) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-8">
        <p className="text-red-600">
          No se pudo cargar la información del panel.
        </p>
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
            Panel de control
          </h1>

          <p className="text-gray-600 mt-3">
            Resumen general de productos, pedidos y ventas de PulseWear.
          </p>
        </div>

        <Link
          to="/admin/orders"
          className="bg-black text-white px-6 py-3 rounded-full font-bold text-center"
        >
          Ver pedidos
        </Link>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-10">
        <div className="bg-white border-2 border-gray-200 rounded-3xl p-6 shadow-md">
          <p className="text-gray-500">Productos</p>
          <p className="text-5xl font-black mt-3">
            {products.length}
          </p>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-3xl p-6 shadow-md">
          <p className="text-gray-500">Pedidos</p>
          <p className="text-5xl font-black mt-3">
            {orders.length}
          </p>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-3xl p-6 shadow-md">
          <p className="text-gray-500">Ventas</p>
          <p className="text-5xl font-black mt-3">
            {totalSales.toFixed(2)}€
          </p>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-3xl p-6 shadow-md">
          <p className="text-gray-500">Pendientes</p>
          <p className="text-5xl font-black mt-3">
            {pendingOrders}
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white border rounded-3xl p-6">
          <p className="text-gray-500">Pedidos confirmados</p>
          <p className="text-4xl font-black mt-3">
            {confirmedOrders}
          </p>
        </div>

        <div className="bg-white border rounded-3xl p-6">
          <p className="text-gray-500">Pedidos enviados</p>
          <p className="text-4xl font-black mt-3">
            {shippedOrders}
          </p>
        </div>

        <div className="bg-black text-white rounded-3xl p-6">
          <p className="text-gray-300">Estado del sistema</p>
          <p className="text-2xl font-black mt-3">
            API conectada
          </p>
        </div>
      </div>
    </div>
  );
}