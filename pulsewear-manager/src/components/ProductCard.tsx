interface ProductCardProps {
  name: string;
  price: number;
  category: string;
}

export default function ProductCard({ name, price, category }: ProductCardProps) {
  return (
    <div className="rounded-2xl border overflow-hidden">
      <div className="h-56 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">Product Image</span>
      </div>

      <div className="p-5">
        <p className="text-sm text-gray-500">{category}</p>
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="mt-2 font-semibold">€{price}</p>
      </div>
    </div>
  );
}