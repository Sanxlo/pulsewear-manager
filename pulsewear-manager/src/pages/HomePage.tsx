import BenefitCard from "../components/BenefitCard";
import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";
import ReviewCard from "../components/ReviewCard";

const featuredProducts = [
  { name: "Sudadera Oversize Pulse", price: 59.99, category: "Sudaderas" },
  { name: "Camiseta Training Core", price: 29.99, category: "Entrenamiento" },
  { name: "Short Deportivo Flex", price: 34.99, category: "Pantalones Cortos" },
  { name: "Gorra Urban Sport", price: 19.99, category: "Accesorios" },
];

const reviews = [
  { name: "Alejandro", text: "Increíble calidad y ajuste perfecto." },
  { name: "Marta", text: "La sudadera se siente premium y combina con todo." },
  { name: "Daniel", text: "Perfecta tanto para entrenar como para el día a día." },
];

export default function HomePage() {
  return (
    <div>
      <section className="bg-black text-white text-center py-3 rounded-full text-sm font-semibold">
        Envío gratuito en pedidos superiores a 50€ · Devoluciones durante 30 días
      </section>

      <HeroSection />

      <section className="grid md:grid-cols-4 gap-6 py-12">
        <BenefitCard
          icon="🚚"
          title="Envío Rápido"
          description="Entregas rápidas en toda España."
        />

        <BenefitCard
          icon="💪"
          title="Calidad Premium"
          description="Prendas diseñadas para durar y rendir."
        />

        <BenefitCard
          icon="♻️"
          title="Materiales Inteligentes"
          description="Comodidad y resistencia para el uso diario."
        />

        <BenefitCard
          icon="⭐"
          title="Clientes Satisfechos"
          description="Valoraciones excelentes de nuestros usuarios."
        />
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-black mb-8">Productos Destacados</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-black mb-8">
          Opiniones de Clientes
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </div>
      </section>
    </div>
  );
}