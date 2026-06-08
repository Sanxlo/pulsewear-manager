import { useMemo, useState } from "react";
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
  const [selectedCategory, setSelectedCategory] = useState("Todas");

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

if (loading) {
  return <p>Cargando productos...</p>;
}

if (error) {
  return <p className="text-red-600">{error}</p>;
}

return (
    <div>
      <h1 className="text-4xl font-black mb-8">Catálogo</h1>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <input
          type="text"
          placeholder="Buscar producto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-4 py-3 w-full"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border rounded-lg px-4 py-3 w-full"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <p className="text-gray-600 mb-6">
        {filteredProducts.length} producto(s) encontrado(s)
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}