import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-3xl text-white">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest">
            Nueva colección
          </p>

          <h1 className="text-5xl font-black leading-tight md:text-6xl lg:text-7xl">
            Diseñado para entrenar.
            <br />
            Creado para destacar.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-200">
            Ropa deportiva premium pensada para el entrenamiento,
            el estilo urbano y el día a día.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/catalog"
              className="rounded-full bg-white px-8 py-4 text-center font-bold text-black transition hover:bg-gray-200"
            >
              Ver Catálogo
            </Link>

            <Link
              to="/compare"
              className="rounded-full border border-white px-8 py-4 text-center font-bold text-white transition hover:bg-white hover:text-black"
            >
              Comparar Productos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}