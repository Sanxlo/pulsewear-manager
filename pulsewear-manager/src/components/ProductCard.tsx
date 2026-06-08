import { Link } from "react-router-dom";
import type { Product } from "../types/Product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="rounded-2xl border overflow-hidden hover:shadow-lg transition">
      <div className="h-56 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">Imagen Producto</span>
      </div>

      <div className="p-5">
        <p className="text-sm text-gray-500">{product.category}</p>
        <h3 className="font-bold text-lg">{product.name}</h3>
        <p className="mt-2 font-semibold">{product.price}€</p>
        <p className="text-yellow-500 mt-2">⭐ {product.rating}</p>

        <Link
          to={`/products/${product.id}`}
          className="inline-block mt-4 bg-black text-white px-4 py-2 rounded-full text-sm font-semibold"
        >
          Ver detalle
        </Link>
      </div>
    </div>
  );
}