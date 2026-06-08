import { useState, type FormEvent } from "react";
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

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!form.name || !form.email || !form.address || !form.phone) {
      setMessage("Por favor, completa todos los campos.");
      return;
    }

    createOrder({
      customerName: form.name,
      email: form.email,
      address: form.address,
      phone: form.phone,
      total,
    });

    setMessage("Pedido creado correctamente. Gracias por comprar en PulseWear.");
  };

  return (
    <div className="grid lg:grid-cols-2 gap-10">
      <section>
        <h1 className="text-4xl font-black mb-8">Checkout</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Nombre completo"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border rounded-lg px-4 py-3 w-full"
          />

          <input
            type="email"
            placeholder="Correo electrónico"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="border rounded-lg px-4 py-3 w-full"
          />

          <input
            type="text"
            placeholder="Dirección"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            className="border rounded-lg px-4 py-3 w-full"
          />

          <input
            type="tel"
            placeholder="Teléfono"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="border rounded-lg px-4 py-3 w-full"
          />

          <button
            type="submit"
            className="bg-black text-white px-8 py-4 rounded-full font-bold"
          >
            Completar pedido
          </button>
        </form>

        {message && <p className="mt-6 font-semibold">{message}</p>}
      </section>

      <section className="border rounded-2xl p-6 h-fit">
        <h2 className="text-2xl font-black mb-6">Resumen del pedido</h2>

        {cart.length === 0 ? (
          <p className="text-gray-600">Tu carrito está vacío.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div key={`${item.id}-${index}`} className="flex justify-between">
                <span>{item.name}</span>
                <span>{item.price}€</span>
              </div>
            ))}

            <hr />

            <div className="flex justify-between font-black text-xl">
              <span>Total</span>
              <span>{total.toFixed(2)}€</span>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}