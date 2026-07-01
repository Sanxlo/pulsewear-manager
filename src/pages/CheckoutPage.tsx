import { useState } from "react";
import { ShieldCheck, Truck, RotateCcw, CreditCard } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useOrders } from "../context/OrderContext";

export default function CheckoutPage() {
  const { cart, clearCart, removeFromCart } = useCart();
  const { createOrder } = useOrders();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const [payment, setPayment] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const isPaymentComplete =
    payment.cardName.trim() &&
    payment.cardNumber.trim().length >= 12 &&
    payment.expiry.trim() &&
    payment.cvv.trim().length >= 3;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!form.name || !form.email || !form.address || !form.phone) {
      setMessage("Por favor, completa todos los datos de envío.");
      return;
    }

    if (!isPaymentComplete) {
      setMessage("Por favor, completa correctamente los datos de pago.");
      return;
    }

    if (cart.length === 0) {
      setMessage("Tu carrito está vacío.");
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
        items: cart,
      });

      clearCart();

      setMessage("Pedido creado correctamente. Pago simulado aprobado.");

      setForm({
        name: "",
        email: "",
        address: "",
        phone: "",
      });

      setPayment({
        cardName: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
      });
    } catch {
      setMessage("Error al crear el pedido.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
          Compra segura
        </p>

        <h1 className="mt-2 text-5xl font-black">
          Finalizar pedido
        </h1>

        <p className="mt-3 max-w-2xl text-gray-600">
          Revisa tus productos, completa tus datos y confirma tu pedido de forma segura.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="space-y-8">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-md">
            <h2 className="mb-6 text-3xl font-black">
              Datos de envío
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Nombre completo"
                value={form.name}
                onChange={(event) =>
                  setForm({
                    ...form,
                    name: event.target.value,
                  })
                }
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none transition focus:border-black"
              />

              <input
                type="email"
                placeholder="Correo electrónico"
                value={form.email}
                onChange={(event) =>
                  setForm({
                    ...form,
                    email: event.target.value,
                  })
                }
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none transition focus:border-black"
              />

              <input
                type="text"
                placeholder="Dirección de entrega"
                value={form.address}
                onChange={(event) =>
                  setForm({
                    ...form,
                    address: event.target.value,
                  })
                }
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none transition focus:border-black"
              />

              <input
                type="tel"
                placeholder="Teléfono de contacto"
                value={form.phone}
                onChange={(event) =>
                  setForm({
                    ...form,
                    phone: event.target.value,
                  })
                }
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none transition focus:border-black"
              />

              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white">
                    <CreditCard size={22} />
                  </div>

                  <div>
                    <h2 className="text-2xl font-black">
                      Método de pago
                    </h2>

                    <p className="text-sm text-gray-500">
                      Pago simulado para fines académicos.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nombre del titular"
                    value={payment.cardName}
                    onChange={(event) =>
                      setPayment({
                        ...payment,
                        cardName: event.target.value,
                      })
                    }
                    className="w-full rounded-2xl border border-gray-300 bg-white px-5 py-4 outline-none transition focus:border-black"
                  />

                  <input
                    type="text"
                    placeholder="Número de tarjeta"
                    value={payment.cardNumber}
                    maxLength={19}
                    onChange={(event) =>
                      setPayment({
                        ...payment,
                        cardNumber: event.target.value,
                      })
                    }
                    className="w-full rounded-2xl border border-gray-300 bg-white px-5 py-4 outline-none transition focus:border-black"
                  />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      placeholder="MM/AA"
                      value={payment.expiry}
                      maxLength={5}
                      onChange={(event) =>
                        setPayment({
                          ...payment,
                          expiry: event.target.value,
                        })
                      }
                      className="w-full rounded-2xl border border-gray-300 bg-white px-5 py-4 outline-none transition focus:border-black"
                    />

                    <input
                      type="password"
                      placeholder="CVV"
                      value={payment.cvv}
                      maxLength={4}
                      onChange={(event) =>
                        setPayment({
                          ...payment,
                          cvv: event.target.value,
                        })
                      }
                      className="w-full rounded-2xl border border-gray-300 bg-white px-5 py-4 outline-none transition focus:border-black"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading || cart.length === 0 || !isPaymentComplete}
                className="mt-4 w-full rounded-full bg-black px-6 py-4 font-bold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Procesando pedido..." : "Confirmar pedido"}
              </button>
            </form>

            {message && (
              <p className="mt-5 rounded-2xl bg-gray-100 px-5 py-4 font-semibold text-gray-700">
                {message}
              </p>
            )}
          </div>
        </section>

        <aside className="h-fit rounded-3xl border border-gray-200 bg-white p-8 shadow-md">
          <h2 className="mb-6 text-3xl font-black">
            Resumen del pedido
          </h2>

          {cart.length === 0 ? (
            <p className="text-gray-500">
              Tu carrito está vacío.
            </p>
          ) : (
            <div className="space-y-5">
              {cart.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="flex justify-between gap-5 border-b border-gray-200 pb-5"
                >
                  <div>
                    <p className="font-bold">
                      {item.name}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Talla:{" "}
                      <span className="font-bold text-black">
                        {item.size}
                      </span>
                    </p>

                    <button
                      type="button"
                      onClick={() => removeFromCart(index)}
                      className="mt-3 text-sm font-bold text-red-600 transition hover:text-red-800"
                    >
                      Eliminar
                    </button>
                  </div>

                  <p className="font-bold">
                    {item.price.toFixed(2)}€
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-6">
            <p className="text-xl font-black">
              Total
            </p>

            <p className="text-3xl font-black">
              {total.toFixed(2)}€
            </p>
          </div>

          <div className="mt-8 grid gap-3">
            <div className="flex items-center gap-3 rounded-2xl bg-gray-50 p-4">
              <Truck size={22} />
              <p className="text-sm font-semibold">
                Envío rápido en España
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-gray-50 p-4">
              <RotateCcw size={22} />
              <p className="text-sm font-semibold">
                Devoluciones durante 30 días
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-gray-50 p-4">
              <ShieldCheck size={22} />
              <p className="text-sm font-semibold">
                Pago y datos protegidos
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}