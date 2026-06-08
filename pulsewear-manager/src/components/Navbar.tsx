import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <header className="border-b">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold"
        >
          PulseWear
        </Link>

        <div className="flex gap-6 items-center">
          <Link
            to="/"
            className="hover:text-gray-600 transition"
          >
            Inicio
          </Link>

          <Link
            to="/catalog"
            className="hover:text-gray-600 transition"
          >
            Catálogo
          </Link>

          <Link
            to="/compare"
            className="hover:text-gray-600 transition"
          >
            Comparador
          </Link>

          <Link
            to="/admin"
            className="hover:text-gray-600 transition"
          >
            Administración
          </Link>

          <span className="font-semibold">
            🛒 {cart.length}
          </span>
        </div>
      </nav>
    </header>
  );
}