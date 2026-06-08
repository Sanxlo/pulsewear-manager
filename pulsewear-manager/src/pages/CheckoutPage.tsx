import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useOrders } from "../context/OrderContext";

export default function CheckoutPage() {
  const { cart } = useCart();
  const { createOrder } = useOrders();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  const handleSubmit = async (
    event: React.FormEvent
  ) => {
    event.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.address ||
      !form.phone
    ) {
      setMessage(
        "Por favor, completa todos los campos."
      );
      return;
    }

    try {
      setLoading(true);

      await createOrder({
        customerName: form.name,
        email: form.email,
        address: form.address,
        phone: form.phone,
        total,
      });

      setMessage(
        "Pedido creado correctamente."
      );

      setForm({
        name: "",
        email: "",
        address: "",
        phone: "",
      });
    } catch {
      setMessage(
        "Error al crear el pedido."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-10">
      <section>
        <h1 className="text-4xl font-black mb-8">
          Checkout
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Nombre completo"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
            className="border rounded-lg px-4 py-3 w-full"
          />

          <input
            type="email"
            placeholder="Correo electrónico"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            className="border rounded-lg px-4 py-3 w-full"
          />

          <input
            type="text"
            placeholder="Dirección"
            value={form.address}
            onChange={(e) =>
              setForm({
                ...form,
                address: e.target.value,
              })
            }
            className="border rounded-lg px-4 py-3 w-full"
          />

          <input
            type="tel"
            placeholder="Teléfono"
            value={form.phone}
            onChange={(e) =>
              setForm({
                ...form,
                phone: e.target.value,
              })
            }
            className="border rounded-lg px-4 py-3 w-full"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white px-6 py-3 rounded-lg"
          >
            {loading
              ? "Procesando..."
              : "Finalizar compra"}
          </button>
        </form>

        {message && (
          <p className="mt-4 font-medium">
            {message}
          </p>
        )}
      </section>

      <section>
        <h2 className="text-3xl font-black mb-6">
          Resumen
        </h2>

        <div className="space-y-3">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between border-b pb-2"
            >
              <span>{item.name}</span>
              <span>{item.price.toFixed(2)}€</span>
            </div>
          ))}
        </div>

        <div className="mt-6 text-2xl font-black">
          Total: {total.toFixed(2)}€
        </div>
      </section>
    </div>
  );
}