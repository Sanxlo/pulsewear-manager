import { motion } from "framer-motion";
import {
  Truck,
  RotateCcw,
  ShieldCheck,
  Star,
} from "lucide-react";
import HeroSection from "../components/HeroSection";
import FeaturedProductsSection from "../components/FeaturedProductsSection";
import ReviewCard from "../components/ReviewCard";
import NewsletterSection from "../components/NewsletterSection";
import { useProducts } from "../hooks/useProducts";

const reviews = [
  {
    name: "Alejandro",
    text: "La calidad me sorprendió. La sudadera tiene muy buen ajuste y se siente premium.",
  },
  {
    name: "Marta",
    text: "Compré para entrenar y terminé usándolo también para salir. Muy cómodo.",
  },
  {
    name: "Daniel",
    text: "El diseño es limpio, el tejido resistente y el pedido llegó rápido.",
  },
];

const benefits = [
  {
    icon: Truck,
    title: "Envío gratuito +50€",
    description: "Entregas rápidas en España",
  },
  {
    icon: RotateCcw,
    title: "Devoluciones 30 días",
    description: "Compra sin preocupaciones",
  },
  {
    icon: ShieldCheck,
    title: "Pago seguro",
    description: "Datos protegidos",
  },
  {
    icon: Star,
    title: "Clientes satisfechos",
    description: "Valoraciones excelentes",
  },
];

export default function HomePage() {
  const { products, loading, error } = useProducts();

  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      <section className="bg-black py-3 text-center text-sm font-semibold text-white">
        Envío gratuito en pedidos superiores a 50€ · Devoluciones durante 30 días
      </section>

      <HeroSection />

      <FeaturedProductsSection
        products={featuredProducts}
        loading={loading}
        error={error}
      />

      <motion.section
        className="border-y border-gray-200 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="grid gap-10 text-center md:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-black text-white shadow-lg">
                    <Icon size={30} strokeWidth={2.4} />
                  </div>

                  <p className="text-lg font-bold">
                    {benefit.title}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      <motion.div
        className="mx-auto max-w-7xl px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <section className="pt-16 pb-10">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              Comunidad PulseWear
            </p>

            <h2 className="mt-2 text-4xl font-black md:text-5xl">
              Opiniones de clientes
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Personas reales que usan PulseWear para entrenar, moverse y vestir con estilo.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <ReviewCard {...review} />
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>

      <NewsletterSection />
    </div>
  );
}