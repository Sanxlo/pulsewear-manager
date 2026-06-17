import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";

const sizes = ["S", "M", "L", "XL"];

export default function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { products, loading, error } = useProducts();

  const [selectedSize, setSelectedSize] = useState("");
  const [message, setMessage] = useState("");

  const product = products.find((item) => item.id === Number(id));

  const relatedProducts = products.filter(
    (item) => item.id !== product?.id
  );

  if (loading) {
    return (
      <p className="max-w-7xl mx-auto px-6 py-8">
        Cargando producto...
      </p>
    );
  }

  if (error) {
    return (
      <p className="max-w-7xl mx-auto px-6 py-8 text-red-600">
        {error}
      </p>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-8">
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
    if (!selectedSize) {
      setMessage("Selecciona una talla antes de añadir al carrito.");
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize,
    });

    setMessage(`Producto añadido al carrito en talla ${selectedSize}.`);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <Link
        to="/catalog"
        className="text-sm font-semibold text-gray-500 hover:text-black"
      >
        ← Volver al catálogo
      </Link>

      <section className="grid lg:grid-cols-2 gap-12 mt-8 items-start">
        <div className="overflow-hidden rounded-3xl bg-gray-100 shadow-xl">
          <img
            src={product.image}
            alt={product.name}
            className="h-[620px] w-full object-cover"
          />
        </div>

        <div className="lg:sticky lg:top-28">
          <p className="text-sm uppercase tracking-widest text-gray-500">
            {product.category}
          </p>

          <h1 className="text-5xl lg:text-6xl font-black mt-4">
            {product.name}
          </h1>

          <p className="text-black font-bold mt-4">
            ★ {product.rating}
          </p>

          <p className="text-4xl font-black mt-6">
            {product.price.toFixed(2)}€
          </p>

          <p className="text-gray-600 mt-6 leading-relaxed max-w-xl">
            Prenda premium de PulseWear diseñada para combinar comodidad,
            rendimiento y estilo urbano. Ideal para entrenar, salir o crear
            outfits deportivos modernos.
          </p>

          <div className="mt-8">
            <p className="font-bold mb-3">
              Talla seleccionada:{" "}
              <span className="text-gray-500">
                {selectedSize || "Ninguna"}
              </span>
            </p>

            <div className="flex gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 rounded-full border font-semibold transition ${
                    selectedSize === size
                      ? "bg-black text-white border-black"
                      : "hover:bg-black hover:text-white"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {message && (
            <p className="mt-4 font-semibold text-gray-700">
              {message}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <button
              onClick={handleAddToCart}
              className="rounded-full bg-black px-8 py-4 font-bold text-white transition hover:bg-gray-800"
            >
              Añadir al carrito
            </button>

            <Link
              to="/checkout"
              className="rounded-full border px-8 py-4 text-center font-bold transition hover:bg-black hover:text-white"
            >
              Ir a checkout
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 text-center text-sm">
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="font-black">🚚</p>
              <p className="text-gray-500">Envío rápido</p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="font-black">↩️</p>
              <p className="text-gray-500">30 días</p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <p className="font-black">🔒</p>
              <p className="text-gray-500">Pago seguro</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mb-10">
          <p className="uppercase tracking-widest text-sm text-gray-500 font-semibold">
            También te puede interesar
          </p>

          <h2 className="text-4xl font-black mt-2">
            Productos relacionados
          </h2>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {relatedProducts.map((item) => (
            <div
              key={item.id}
              className="min-w-[320px] max-w-[320px] flex-shrink-0 snap-start"
            >
              <ProductCard product={item} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}