import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          
          <Link
            to="/"
            className="text-2xl font-black text-center md:text-left"
          >
            PulseWear
          </Link>

          <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 md:gap-6 text-sm md:text-base">
            
            <Link
              to="/"
              className="hover:text-gray-500 transition"
            >
              Inicio
            </Link>

            <Link
              to="/catalog"
              className="hover:text-gray-500 transition"
            >
              Catálogo
            </Link>

            <Link
              to="/compare"
              className="hover:text-gray-500 transition"
            >
              Comparador
            </Link>

            <Link
              to="/admin"
              className="hover:text-gray-500 transition"
            >
              Administración
            </Link>

            <div className="font-semibold">
              🛒 {cart.length}
            </div>

          </div>
        </div>
      </nav>
    </header>
  );
}