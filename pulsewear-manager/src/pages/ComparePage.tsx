import { useState } from "react";
import { mockProducts } from "../utils/mockProducts";

export default function ComparePage() {
  const [firstProductId, setFirstProductId] = useState("");
  const [secondProductId, setSecondProductId] = useState("");

  const firstProduct = mockProducts.find(
    (product) => product.id === Number(firstProductId)
  );

  const secondProduct = mockProducts.find(
    (product) => product.id === Number(secondProductId)
  );

  return (
    <div>
      <h1 className="text-4xl font-black mb-8">Comparador</h1>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <select
          value={firstProductId}
          onChange={(e) => setFirstProductId(e.target.value)}
          className="border rounded-lg px-4 py-3"
        >
          <option value="">Selecciona el primer producto</option>

          {mockProducts.map((product) => (
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

          {mockProducts.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>
      </div>

      {firstProduct && secondProduct && (
        <div className="overflow-x-auto border rounded-2xl">
          <table className="w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4">Característica</th>
                <th className="p-4">{firstProduct.name}</th>
                <th className="p-4">{secondProduct.name}</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t">
                <td className="p-4 font-semibold">Categoría</td>
                <td className="p-4">{firstProduct.category}</td>
                <td className="p-4">{secondProduct.category}</td>
              </tr>

              <tr className="border-t">
                <td className="p-4 font-semibold">Precio</td>
                <td className="p-4">{firstProduct.price}€</td>
                <td className="p-4">{secondProduct.price}€</td>
              </tr>

              <tr className="border-t">
                <td className="p-4 font-semibold">Valoración</td>
                <td className="p-4">⭐ {firstProduct.rating}</td>
                <td className="p-4">⭐ {secondProduct.rating}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}