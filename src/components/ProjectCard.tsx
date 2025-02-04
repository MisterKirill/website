import Link from 'next/link';

export type ProjectCardProps = {
  name: string;
  description: string;
  blogName: string;
};

export default function ProjectCard({
  name,
  description,
  blogName,
}: ProjectCardProps) {
  return (
    <Link href={`/blog/${blogName}`}>
      <div className="flex flex-col group px-6 py-4 rounded-lg bg-teal-200 dark:bg-teal-800 transition-colors">
        <span className="font-semibold text-xl">{name}</span>
        <span className="font-medium mt-2">{description}</span>
        <span className="text-sm font-semibold text-right mt-4 group-hover:underline">
          READ MORE
        </span>
      </div>
    </Link>
  );
}
