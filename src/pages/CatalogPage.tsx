import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../hooks/useProducts";

const categories = [
  "Todas",
  "Sudaderas",
  "Entrenamiento",
  "Pantalones",
  "Accesorios",
  "Chaquetas",
];

export default function CatalogPage() {
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCategory = searchParams.get("category") || "Todas";

  const { products, loading, error } = useProducts();

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "Todas" || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory, products]);

  const handleCategoryChange = (category: string) => {
    if (category === "Todas") {
      setSearchParams({});
      return;
    }

    setSearchParams({ category });
  };

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
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-400">
          Tienda PulseWear
        </p>

        <h1 className="text-5xl font-black md:text-6xl">
          {selectedCategory === "Todas" ? "Catálogo" : selectedCategory}
        </h1>

        <p className="mt-4 max-w-2xl text-gray-300">
          Explora nuestra selección de ropa deportiva premium para entrenamiento,
          estilo urbano y uso diario.
        </p>
      </section>

      <section className="mb-8 rounded-3xl border border-gray-200 bg-white p-5 shadow-md">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="relative">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Buscar producto..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-12 py-4 outline-none transition focus:border-black focus:bg-white"
            />
          </div>

          <div className="relative">
            <SlidersHorizontal
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <select
              value={selectedCategory}
              onChange={(event) => handleCategoryChange(event.target.value)}
              className="w-full appearance-none rounded-2xl border border-gray-200 bg-gray-50 px-12 py-4 outline-none transition focus:border-black focus:bg-white"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Resultados
          </p>

          <h2 className="text-3xl font-black">
            {filteredProducts.length} producto(s) encontrado(s)
          </h2>
        </div>

        <p className="text-gray-500">
          Categoría:{" "}
          <span className="font-bold text-black">
            {selectedCategory}
          </span>
        </p>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-md">
          <h3 className="text-2xl font-black">
            No se encontraron productos
          </h3>

          <p className="mt-2 text-gray-500">
            Prueba con otro nombre o cambia la categoría seleccionada.
          </p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}