import ProjectCard from '@/components/ProjectCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Projects – Kirill Siukhin',
  description: 'The list of my personal projects.',
};

export default function Page() {
  return (
    <>
      <h1 className="font-bold text-5xl mb-8">My Projects</h1>

      <div className="flex gap-4 flex-wrap">
        <ProjectCard name="Linkship" description="Web-profile creation service" />
      </div>
    </>
  );
}
