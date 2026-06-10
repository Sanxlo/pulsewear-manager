import { Link } from "react-router-dom";
import type { Product } from "../types/Product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <div
      className="
        bg-white
        border-2 border-gray-300
        rounded-3xl
        overflow-hidden
        shadow-md
        hover:shadow-xl
        hover:-translate-y-1
        transition-all
        duration-300
      "
    >
      <div className="relative">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-64 w-full object-cover"
          />
        ) : (
          <div className="h-64 bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400">
              Imagen no disponible
            </span>
          </div>
        )}

        <span className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-semibold shadow">
          {product.category}
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-2xl font-black mb-2">
          {product.name}
        </h3>

        <p className="text-gray-500 text-sm mb-4">
          Prenda deportiva premium para entrenamiento y estilo urbano.
        </p>

        <div className="flex items-center justify-between mb-5">
          <span className="text-3xl font-black">
            {product.price}€
          </span>

          <span className="text-yellow-500 font-semibold">
            ⭐ {product.rating}
          </span>
        </div>

        <Link
          to={`/products/${product.id}`}
          className="
            block
            text-center
            bg-black
            text-white
            py-3
            rounded-full
            font-semibold
            hover:bg-gray-800
            transition
          "
        >
          Ver detalle
        </Link>
      </div>
    </div>
  );
}