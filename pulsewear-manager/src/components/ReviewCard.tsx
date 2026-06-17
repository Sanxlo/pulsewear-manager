interface ReviewCardProps {
  name: string;
  text: string;
}

export default function ReviewCard({
  name,
  text,
}: ReviewCardProps) {
  return (
    <article className="bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300">
      <div className="flex gap-1 text-black">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>

      <p className="text-gray-700 leading-relaxed">
        “{text}”
      </p>

      <div className="mt-6 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-black">
          {name.charAt(0)}
        </div>

        <div>
          <p className="font-bold">
            {name}
          </p>
          <p className="text-sm text-gray-500">
            Cliente verificado
          </p>
        </div>
      </div>
    </article>
  );
}