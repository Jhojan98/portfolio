interface StatsCardProps {
  number: string;
  label: string;
}

export default function StatsCard({ number, label }: StatsCardProps) {
  return (
    <div className="flex flex-col items-center p-6 rounded-2xl bg-space-purple/50 border border-white/5">
      <span className="text-3xl font-bold text-accent-purple">{number}</span>
      <span className="text-sm text-gray-400 mt-1">{label}</span>
    </div>
  );
}
