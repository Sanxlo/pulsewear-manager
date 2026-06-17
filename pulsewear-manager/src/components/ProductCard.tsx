import { Link } from "react-router-dom";
import type { Product } from "../types/Product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative h-96 overflow-hidden bg-gray-100">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-gray-400">
              Imagen no disponible
            </span>
          </div>
        )}

        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold shadow">
          {product.category}
        </span>
      </div>

      <div className="p-6">
        <h3 className="mb-3 text-2xl font-black leading-tight">
          {product.name}
        </h3>

        <p className="mb-5 text-sm leading-relaxed text-gray-500">
          Prenda deportiva premium para entrenamiento y estilo urbano.
        </p>

        <div className="mb-6 flex items-center justify-between">
          <span className="text-3xl font-black">
            {product.price.toFixed(2)}€
          </span>

          <span className="font-bold text-black">
            ★ {product.rating}
          </span>
        </div>

        <Link
          to={`/products/${product.id}`}
          className="block rounded-full bg-black py-3 text-center font-bold text-white transition hover:bg-gray-800"
        >
          Ver detalle
        </Link>
      </div>
    </article>
  );
}