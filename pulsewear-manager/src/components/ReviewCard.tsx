interface ReviewCardProps {
  name: string;
  text: string;
}

export default function ReviewCard({ name, text }: ReviewCardProps) {
  return (
    <div className="rounded-2xl border p-6">
      <p className="text-yellow-500 mb-3">★★★★★</p>
      <p className="text-gray-700">"{text}"</p>
      <p className="font-bold mt-4">{name}</p>
    </div>
  );
}