import { Tables } from '@/types/database.types';
import Link from 'next/link';

export default function ProjectCard({
  project,
}: {
  project: Tables<'projects'>;
}) {
  return project.post_url_name ? (
    <Link href={`/blog/${project.post_url_name}`}>
      <ProjectCardContent project={project} />
    </Link>
  ) : (
    <ProjectCardContent project={project} />
  );
}

function ProjectCardContent({ project }: { project: Tables<'projects'> }) {
  return (
    <div className="flex flex-col group px-6 py-4 rounded-lg bg-teal-200 dark:bg-teal-800 transition-colors">
      <span className="font-semibold text-xl">{project.name}</span>
      <span className="font-medium mt-2">{project.description}</span>

      {project.post_url_name && (
        <span className="text-sm font-semibold text-right mt-4 group-hover:underline">
          READ MORE
        </span>
      )}
    </div>
  );
}
