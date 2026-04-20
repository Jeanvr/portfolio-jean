import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
}) => (
  <article className="overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/75 shadow-xl shadow-slate-950/25 transition hover:-translate-y-1">
    <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10">
      <Image
        src={image}
        alt={`Vista previa del proyecto ${title}`}
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
      />
    </div>
    <div className="p-5">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
    </div>
  </article>
);

export default ProjectCard;
