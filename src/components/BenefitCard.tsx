interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function BenefitCard({
  icon,
  title,
  description,
}: BenefitCardProps) {
  return (
    <div
      className="
        bg-white
        rounded-3xl
        border border-gray-200
        p-8
        text-center
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
        hover:border-black
      "
    >
      <div className="text-4xl mb-5">
        {icon}
      </div>

      <h3 className="font-bold text-xl mb-3">
        {title}
      </h3>

      <p className="text-gray-500 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
