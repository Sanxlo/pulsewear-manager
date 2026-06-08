import { Link, useParams } from "react-router-dom";
import { mockProducts } from "../utils/mockProducts";
import { useCart } from "../context/CartContext";

export default function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = mockProducts.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div>
        <h1 className="text-4xl font-black mb-4">
          Producto no encontrado
        </h1>

        <Link to="/catalog" className="underline">
          Volver al catálogo
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
    });
  };

  return (
    <div className="grid lg:grid-cols-2 gap-10">
      <div className="h-[520px] rounded-3xl bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500 text-xl">
          Imagen Producto
        </span>
      </div>

      <div>
        <p className="text-gray-500">{product.category}</p>

        <h1 className="text-5xl font-black mt-3">
          {product.name}
        </h1>

        <p className="text-yellow-500 mt-4">
          ⭐ {product.rating}
        </p>

        <p className="text-3xl font-bold mt-6">
          {product.price}€
        </p>

        <p className="text-gray-600 mt-6">
          Prenda premium de PulseWear diseñada para combinar comodidad,
          rendimiento y estilo urbano. Ideal para entrenar, salir o crear
          outfits deportivos modernos.
        </p>

        <div className="mt-8">
          <p className="font-bold mb-3">Tallas disponibles</p>

          <div className="flex gap-3">
            {["S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className="border rounded-full w-12 h-12 font-semibold"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <button
            onClick={handleAddToCart}
            className="bg-black text-white px-8 py-4 rounded-full font-bold"
          >
            Añadir al carrito
          </button>

          <Link
            to="/checkout"
            className="border px-8 py-4 rounded-full font-bold"
          >
            Ir a checkout
          </Link>
        </div>
      </div>
    </div>
  );
}