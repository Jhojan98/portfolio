import { ExternalLink } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
}

export default function ProjectCard({ title, description, tags, image }: ProjectCardProps) {
  return (
    <div className="group relative rounded-2xl bg-white dark:bg-white/5 border border-[#14315C]/10 dark:border-white/10 overflow-hidden hover:border-[#14315C]/40 dark:hover:border-white/40 transition-all shadow-sm dark:shadow-none">
      <div className="relative h-48 bg-gradient-to-br from-[#14315C]/10 to-transparent dark:from-white/10 dark:to-transparent flex items-center justify-center">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        ) : (
          <div className="text-[#14315C]/50 dark:text-gray-500 text-sm">Imagen del proyecto</div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-[#14315C] dark:text-white">{title}</h3>
          <ExternalLink className="w-5 h-5 text-[#14315C]/50 dark:text-gray-400 group-hover:text-[#14315C] dark:group-hover:text-white transition-colors flex-shrink-0 ml-2" />
        </div>

        <p className="text-[#14315C]/70 dark:text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full bg-[#14315C]/5 dark:bg-white/10 text-[#14315C] dark:text-gray-200 border border-[#14315C]/15 dark:border-white/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
