import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
}

export default function ProjectCard({ title, description, tags, image }: ProjectCardProps) {
  return (
    <div className="group relative rounded-2xl bg-space-purple/30 border border-white/5 overflow-hidden hover:border-accent-purple/50 transition-all">
      <div className="relative h-48 bg-gradient-to-br from-accent-purple/10 to-transparent flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-gray-500 text-sm">Imagen del proyecto</div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-accent-purple transition-colors flex-shrink-0 ml-2" />
        </div>

        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full bg-accent-purple/10 text-accent-light border border-accent-purple/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
