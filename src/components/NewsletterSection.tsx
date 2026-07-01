import { useState } from "react";
import { Mail } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) {
      setMessage("Introduce un correo válido.");
      return;
    }

    setMessage("Gracias por unirte a PulseWear.");
    setEmail("");
  };

  return (
    <section className="mx-auto max-w-7xl px-6 pb-12">
      <div className="rounded-2xl bg-black px-6 py-6 text-white shadow-xl">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
              <Mail size={24} />
            </div>

            <div>
              <h2 className="text-xl font-black">
                Únete a la familia PulseWear
              </h2>

              <p className="text-sm text-gray-300">
                Recibe novedades, ofertas exclusivas y consejos de entrenamiento.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col gap-3 md:w-auto sm:flex-row"
          >
            <input
              type="email"
              placeholder="Tu email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="min-w-[280px] rounded-xl bg-white/10 px-5 py-3 text-white placeholder:text-gray-400 outline-none"
            />

            <button
              type="submit"
              className="rounded-xl bg-white px-6 py-3 font-bold text-black transition hover:bg-gray-200"
            >
              Suscribirme
            </button>
          </form>
        </div>

        {message && (
          <p className="mt-3 text-sm text-gray-300">
            {message}
          </p>
        )}
      </div>
    </section>
  );
}