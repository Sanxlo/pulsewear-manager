import { useState } from "react";
import { useProducts } from "../hooks/useProducts";

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

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-4xl font-black mb-4">Comparador</h1>
      <p className="text-gray-600 mb-8">
        Selecciona dos productos para comparar precio, categoría y valoración.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <select
          value={firstProductId}
          onChange={(e) => setFirstProductId(e.target.value)}
          className="border rounded-lg px-4 py-3"
        >
          <option value="">Selecciona el primer producto</option>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>

        <select
          value={secondProductId}
          onChange={(e) => setSecondProductId(e.target.value)}
          className="border rounded-lg px-4 py-3"
        >
          <option value="">Selecciona el segundo producto</option>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>
      </div>

      {firstProduct && secondProduct ? (
        <div className="overflow-hidden rounded-2xl border bg-white">
          <div className="grid md:grid-cols-2">
            {[firstProduct, secondProduct].map((product) => (
              <div key={product.id} className="p-6 border-b md:border-b-0 md:border-r last:border-r-0">
                {product.image && (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-72 w-full rounded-2xl object-cover mb-5"
                  />
                )}

                <p className="text-sm text-gray-500">{product.category}</p>
                <h2 className="text-2xl font-black mt-1">{product.name}</h2>
                <p className="text-3xl font-black mt-4">{product.price.toFixed(2)}€</p>
                <p className="text-yellow-500 mt-2">⭐ {product.rating}</p>
              </div>
            ))}
          </div>

          <table className="w-full text-left">
            <tbody>
              <tr className="border-t">
                <td className="p-4 font-bold bg-gray-50">Categoría</td>
                <td className="p-4">{firstProduct.category}</td>
                <td className="p-4">{secondProduct.category}</td>
              </tr>
              <tr className="border-t">
                <td className="p-4 font-bold bg-gray-50">Precio</td>
                <td className="p-4">{firstProduct.price.toFixed(2)}€</td>
                <td className="p-4">{secondProduct.price.toFixed(2)}€</td>
              </tr>
              <tr className="border-t">
                <td className="p-4 font-bold bg-gray-50">Valoración</td>
                <td className="p-4">⭐ {firstProduct.rating}</td>
                <td className="p-4">⭐ {secondProduct.rating}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-600">
          Elige dos productos para ver la comparación.
        </p>
      )}
    </div>
  );
}