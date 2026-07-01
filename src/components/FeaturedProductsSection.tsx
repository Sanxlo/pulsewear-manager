import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import type { Product } from "../types/Product";

interface FeaturedProductsSectionProps {
  products: Product[];
  loading: boolean;
  error: string;
}

export default function FeaturedProductsSection({
  products,
  loading,
  error,
}: FeaturedProductsSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  return (
    <motion.section
      className="mx-auto max-w-7xl px-6 py-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Nueva colección
          </p>

          <h2 className="mt-2 text-4xl font-black md:text-5xl">
            Productos destacados
          </h2>
        </div>

        <Link
          to="/catalog"
          className="hidden font-bold hover:underline md:block"
        >
          Ver catálogo completo →
        </Link>
      </div>

      {loading && <p>Cargando productos...</p>}

      {error && (
        <p className="text-red-600">
          {error}
        </p>
      )}

      <div className="relative">
        <button
          type="button"
          onClick={() => scroll("left")}
          aria-label="Ver productos anteriores"
          className="absolute left-0 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white shadow-xl transition hover:scale-110 md:flex"
        >
          <ChevronLeft size={24} />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scroll-smooth pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[280px] md:min-w-[310px] xl:min-w-[330px]"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scroll("right")}
          aria-label="Ver más productos"
          className="absolute right-0 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white shadow-xl transition hover:scale-110 md:flex"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </motion.section>
  );
}