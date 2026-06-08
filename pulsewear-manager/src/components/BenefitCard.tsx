interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="rounded-2xl border p-6 text-center">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}