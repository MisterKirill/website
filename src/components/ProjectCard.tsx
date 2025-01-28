export type ProjectCardProps = {
  name: string;
  description: string;
};

export default function ProjectCard({ name, description }: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-2 px-8 py-4 rounded-lg bg-teal-200 dark:bg-teal-700 dark:text-teal-400 transition-[scale,background-color] hover:scale-95">
      <span className="font-semibold text-xl">{name}</span>
      <span className="font-medium">{description}</span>
    </div>
  );
}
