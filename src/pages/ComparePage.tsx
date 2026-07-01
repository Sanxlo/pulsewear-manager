import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, Scale, Star } from "lucide-react";
import { useProducts } from "../hooks/useProducts";
import type { Product } from "../types/Product";

function ProductPreviewCard({
  product,
  isBestPrice,
  isBestRating,
}: {
  product: Product;
  isBestPrice: boolean;
  isBestRating: boolean;
}) {
  return (
    <article className="rounded-3xl border border-gray-200 bg-white p-5 shadow-md">
      <div className="relative overflow-hidden rounded-3xl bg-gray-100">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-80 w-full object-cover"
          />
        ) : (
          <div className="flex h-80 items-center justify-center text-gray-400">
            Imagen no disponible
          </div>
        )}

        <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-xs font-bold shadow">
          {product.category}
        </span>
      </div>

      <div className="mt-6">
        <h2 className="text-3xl font-black leading-tight">
          {product.name}
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-gray-500">
          Prenda premium para entrenamiento, estilo urbano y uso diario.
        </p>

        <div className="mt-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm text-gray-500">
              Precio
            </p>

            <p className="text-4xl font-black">
              {product.price.toFixed(2)}€
            </p>
          </div>

          <div className="text-right">
            <p className="text-sm text-gray-500">
              Valoración
            </p>

            <p className="font-bold">
              ★ {product.rating}
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {isBestPrice && (
            <span className="rounded-full bg-black px-4 py-2 text-xs font-bold text-white">
              Mejor precio
            </span>
          )}

          {isBestRating && (
            <span className="rounded-full bg-gray-100 px-4 py-2 text-xs font-bold text-black">
              Mejor valoración
            </span>
          )}
        </div>

        <Link
          to={`/products/${product.id}`}
          className="mt-6 flex items-center justify-center gap-2 rounded-full bg-black px-6 py-4 font-bold text-white transition hover:bg-gray-800"
        >
          Ver detalle
          <ArrowRight size={18} />
        </Link>
      </div>
    </article>
  );
}

export default function ComparePage() {
  const { products, loading, error } = useProducts();
  const [firstProductId, setFirstProductId] = useState("");
  const [secondProductId, setSecondProductId] = useState("");

  const firstProduct = products.find(
    (product) => product.id === Number(firstProductId)
  );

  const secondProduct = products.find(
    (product) => product.id === Number(secondProductId)
  );

  const comparisonReady = firstProduct && secondProduct;

  const bestPriceId = useMemo(() => {
    if (!firstProduct || !secondProduct) return null;

    if (firstProduct.price === secondProduct.price) return null;

    return firstProduct.price < secondProduct.price
      ? firstProduct.id
      : secondProduct.id;
  }, [firstProduct, secondProduct]);

  const bestRatingId = useMemo(() => {
    if (!firstProduct || !secondProduct) return null;

    if (firstProduct.rating === secondProduct.rating) return null;

    return firstProduct.rating > secondProduct.rating
      ? firstProduct.id
      : secondProduct.id;
  }, [firstProduct, secondProduct]);

  if (loading) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-12">
        <p>Cargando productos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-12">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <section className="mb-10 rounded-3xl bg-black px-8 py-12 text-white shadow-2xl">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black">
          <Scale size={28} />
        </div>

        <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-gray-400">
          Comparador PulseWear
        </p>

        <h1 className="mt-2 text-5xl font-black md:text-6xl">
          Compara antes de elegir
        </h1>

        <p className="mt-4 max-w-2xl text-gray-300">
          Selecciona dos productos y revisa precio, categoría, valoración y
          detalles clave para tomar una mejor decisión de compra.
        </p>
      </section>

      <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-5 shadow-md">
        <div className="grid gap-4 md:grid-cols-2">
          <select
            value={firstProductId}
            onChange={(event) => setFirstProductId(event.target.value)}
            className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 font-semibold outline-none transition focus:border-black focus:bg-white"
          >
            <option value="">
              Selecciona el primer producto
            </option>

            {products.map((product) => (
              <option
                key={product.id}
                value={product.id}
              >
                {product.name}
              </option>
            ))}
          </select>

          <select
            value={secondProductId}
            onChange={(event) => setSecondProductId(event.target.value)}
            className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 font-semibold outline-none transition focus:border-black focus:bg-white"
          >
            <option value="">
              Selecciona el segundo producto
            </option>

            {products.map((product) => (
              <option
                key={product.id}
                value={product.id}
              >
                {product.name}
              </option>
            ))}
          </select>
        </div>
      </section>

      {comparisonReady ? (
        <div className="space-y-10">
          <div className="grid gap-8 lg:grid-cols-2">
            <ProductPreviewCard
              product={firstProduct}
              isBestPrice={bestPriceId === firstProduct.id}
              isBestRating={bestRatingId === firstProduct.id}
            />

            <ProductPreviewCard
              product={secondProduct}
              isBestPrice={bestPriceId === secondProduct.id}
              isBestRating={bestRatingId === secondProduct.id}
            />
          </div>

          <section className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-md">
            <div className="border-b border-gray-200 bg-gray-50 px-6 py-5">
              <div className="flex items-center gap-3">
                <BadgeCheck size={24} />
                <h2 className="text-2xl font-black">
                  Comparación rápida
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-3 border-b border-gray-200">
              <div className="bg-gray-50 p-5 font-bold">
                Característica
              </div>

              <div className="p-5 font-bold">
                {firstProduct.name}
              </div>

              <div className="p-5 font-bold">
                {secondProduct.name}
              </div>
            </div>

            <div className="grid grid-cols-3 border-b border-gray-200">
              <div className="bg-gray-50 p-5 font-bold">
                Categoría
              </div>

              <div className="p-5">
                {firstProduct.category}
              </div>

              <div className="p-5">
                {secondProduct.category}
              </div>
            </div>

            <div className="grid grid-cols-3 border-b border-gray-200">
              <div className="bg-gray-50 p-5 font-bold">
                Precio
              </div>

              <div className="p-5">
                {firstProduct.price.toFixed(2)}€
              </div>

              <div className="p-5">
                {secondProduct.price.toFixed(2)}€
              </div>
            </div>

            <div className="grid grid-cols-3">
              <div className="bg-gray-50 p-5 font-bold">
                Valoración
              </div>

              <div className="p-5">
                <span className="font-bold">
                  <Star
                    size={18}
                    className="mr-1 inline"
                    fill="black"
                  />
                  {firstProduct.rating}
                </span>
              </div>

              <div className="p-5">
                <span className="font-bold">
                  <Star
                    size={18}
                    className="mr-1 inline"
                    fill="black"
                  />
                  {secondProduct.rating}
                </span>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div className="rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-md">
          <h2 className="text-3xl font-black">
            Elige dos productos
          </h2>

          <p className="mt-3 text-gray-500">
            Selecciona dos artículos para activar la comparación visual.
          </p>
        </div>
      )}
    </div>
  );
}