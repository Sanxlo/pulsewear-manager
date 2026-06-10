import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative h-[720px] w-full overflow-hidden">
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
          <p className="uppercase tracking-widest text-sm font-semibold mb-4">
            Nueva colección
          </p>

          <h1 className="text-6xl lg:text-8xl font-black leading-tight">
            Diseñado para entrenar.
            <br />
            Creado para destacar.
          </h1>

          <p className="text-xl text-gray-200 mt-6 max-w-xl">
            Ropa deportiva premium pensada para el entrenamiento,
            el estilo urbano y el día a día.
          </p>

          <div className="flex gap-4 mt-8">
            <Link
              to="/catalog"
              className="bg-white text-black px-8 py-4 rounded-full font-bold"
            >
              Ver Catálogo
            </Link>

            <Link
              to="/compare"
              className="border border-white text-white px-8 py-4 rounded-full font-bold"
            >
              Comparar Productos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}