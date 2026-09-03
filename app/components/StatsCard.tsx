interface StatsCardProps {
  number: string;
  label: string;
}

export default function StatsCard({ number, label }: StatsCardProps) {
  return (
    <div className="flex flex-col items-center p-6 rounded-2xl bg-white dark:bg-white/5 border border-[#14315C]/10 dark:border-white/10 shadow-sm dark:shadow-none">
      <span className="text-3xl font-bold text-[#14315C] dark:text-white">{number}</span>
      <span className="text-sm text-[#14315C]/70 dark:text-gray-400 mt-1">{label}</span>
    </div>
  );
}
