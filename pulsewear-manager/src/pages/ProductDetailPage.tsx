import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useProducts } from "../hooks/useProducts";

export default function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { products, loading, error } = useProducts();

  const product = products.find((item) => item.id === Number(id));

  if (loading) return <p className="max-w-7xl mx-auto px-6 py-8">Cargando producto...</p>;
  if (error) return <p className="max-w-7xl mx-auto px-6 py-8 text-red-600">{error}</p>;

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-4xl font-black mb-4">Producto no encontrado</h1>
        <Link to="/catalog" className="underline">Volver al catálogo</Link>
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
    <div className="max-w-7xl mx-auto px-6 py-12">
      <Link to="/catalog" className="text-sm text-gray-500 hover:underline">
        ← Volver al catálogo
      </Link>

      <div className="grid lg:grid-cols-2 gap-12 mt-8 items-start">
        <div className="rounded-3xl overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-[620px] w-full object-cover"
          />
        </div>

        <div className="lg:sticky lg:top-24">
          <p className="text-sm uppercase tracking-widest text-gray-500">
            {product.category}
          </p>

          <h1 className="text-5xl lg:text-6xl font-black mt-4">
            {product.name}
          </h1>

          <p className="text-yellow-500 mt-4">⭐ {product.rating}</p>

          <p className="text-4xl font-black mt-6">
            {product.price.toFixed(2)}€
          </p>

          <p className="text-gray-600 mt-6 leading-relaxed max-w-xl">
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
                  className="border rounded-full w-12 h-12 font-semibold hover:bg-black hover:text-white transition"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <button
              onClick={handleAddToCart}
              className="bg-black text-white px-8 py-4 rounded-full font-bold"
            >
              Añadir al carrito
            </button>

            <Link
              to="/checkout"
              className="border px-8 py-4 rounded-full font-bold text-center"
            >
              Ir a checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}