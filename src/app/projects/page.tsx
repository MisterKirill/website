import ProjectCard from '@/components/ProjectCard';
import supabase from '@/utils/supabase';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects – Kirill Siukhin',
  description: 'List of projects I am involved in.',
};

export default async function Page() {
  const { data: projects, error } = await supabase.from('projects').select('*');

  return (
    <>
      <h1 className="font-bold text-5xl mb-8">Projects</h1>

      {error ? (
        <span>Failed to get projects. Please, try again later.</span>
      ) : (
        <div className="flex gap-4 flex-wrap">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </>
  );
}
