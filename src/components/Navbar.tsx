import { Link, NavLink } from "react-router-dom";
import { ShoppingBag, ChevronDown } from "lucide-react";
import { useCart } from "../context/CartContext";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `font-medium transition-all duration-200 hover:text-black ${
    isActive ? "text-black font-bold" : "text-gray-600"
  }`;

const categories = [
  "Sudaderas",
  "Entrenamiento",
  "Pantalones",
  "Accesorios",
  "Chaquetas",
];

export default function Navbar() {
  const { cart } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 shadow-sm backdrop-blur-md">
      <nav className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Link
            to="/"
            className="text-center text-3xl font-black tracking-tight transition hover:opacity-80 md:text-left"
          >
            PulseWear
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-end md:gap-6">
            <NavLink to="/" className={navLinkClass}>
              Inicio
            </NavLink>

            <div className="group relative">
              <NavLink
                to="/catalog"
                className={({ isActive }) =>
                  `flex items-center gap-1 font-medium transition-all duration-200 hover:text-black ${
                    isActive ? "text-black font-bold" : "text-gray-600"
                  }`
                }
              >
                Catálogo
                <ChevronDown
                  size={16}
                  className="transition group-hover:rotate-180"
                />
              </NavLink>

              <div className="invisible absolute left-1/2 top-full z-50 mt-4 w-72 -translate-x-1/2 rounded-3xl border border-gray-200 bg-white p-4 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:mt-3 group-hover:opacity-100">
                <p className="mb-3 px-3 text-xs font-bold uppercase tracking-widest text-gray-400">
                  Categorías
                </p>

                <div className="space-y-1">
                  {categories.map((category) => (
                    <Link
                      key={category}
                      to={`/catalog?category=${category}`}
                      className="block rounded-2xl px-3 py-3 font-semibold text-gray-700 transition hover:bg-gray-100 hover:text-black"
                    >
                      {category}
                    </Link>
                  ))}
                </div>

                <div className="mt-3 border-t border-gray-100 pt-3">
                  <Link
                    to="/catalog"
                    className="block rounded-2xl bg-black px-3 py-3 text-center font-bold text-white transition hover:bg-gray-800"
                  >
                    Ver todo el catálogo
                  </Link>
                </div>
              </div>
            </div>

            <NavLink to="/compare" className={navLinkClass}>
              Comparador
            </NavLink>

            <NavLink to="/admin" className={navLinkClass}>
              Administración
            </NavLink>

            <Link
              to="/checkout"
              className="flex items-center gap-3 rounded-full bg-black px-4 py-2 font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-gray-800"
            >
              <ShoppingBag size={18} />
              <span>Carrito</span>

              <span className="min-w-6 rounded-full bg-white px-2 py-1 text-center text-xs font-bold text-black">
                {cart.length}
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}