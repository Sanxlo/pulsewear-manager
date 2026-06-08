import { Link } from "react-router-dom";

export default function AdminPage() {
  return (
    <div>
      <h1 className="text-4xl font-black mb-8">Panel Admin</h1>

      <Link
        to="/admin/orders"
        className="bg-black text-white px-6 py-3 rounded-full font-bold"
      >
        Ver pedidos
      </Link>
    </div>
  );
}