import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="grid lg:grid-cols-2 gap-10 items-center py-16">
      <div>
        <p className="uppercase tracking-widest text-sm font-semibold text-gray-500">
          Nueva colección
        </p>

        <h1 className="text-5xl lg:text-7xl font-black mt-4 leading-tight">
          Entrena fuerte. Vive mejor.
        </h1>

        <p className="text-gray-600 text-lg mt-6 max-w-xl">
          Ropa deportiva premium diseñada para el entrenamiento,
          el estilo urbano y el día a día.
        </p>

        <div className="flex gap-4 mt-8">
          <Link
            to="/catalog"
            className="bg-black text-white px-6 py-3 rounded-full font-semibold"
          >
            Ver Catálogo
          </Link>

          <Link
            to="/compare"
            className="border px-6 py-3 rounded-full font-semibold"
          >
            Comparar Productos
          </Link>
        </div>
      </div>

      <div className="h-[520px] rounded-3xl bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500 text-xl">
          Imagen Principal
        </span>
      </div>
    </section>
  );
}