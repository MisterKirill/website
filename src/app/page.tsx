import { Metadata } from 'next';
import Interest from '@/components/Interest';
import SkillCard from '@/components/SkillCard';

export const metadata: Metadata = {
  title: 'About Me – Kirill Siukhin',
  description: 'The personal website of Kirill Siukhin – developer, musician and chess player.',
};

export default function Page() {
  return (
    <div className="flex flex-col">
      <span className="font-extrabold text-4xl md:text-7xl">
        Hello!
        <br />
        My name is Kirill Siukhin.
      </span>

      <span className="font-medium text-xl md:text-3xl mt-10 border-l-4 border-teal-700 dark:border-teal-200 pl-4">
        I am a 16 years old front-end developer from <Interest>Russia, Yekaterinburg</Interest>.
        <br />
        Interested in <Interest>Web Design</Interest>, <Interest>Mobile Development</Interest>, <Interest>Chess</Interest> and <Interest>Music</Interest>.
      </span>

      <h1 className="text-center font-extrabold text-4xl mt-28">Hard Skills</h1>

      <h2 className="font-bold text-2xl font-noto mt-10">Programming Languages:</h2>

      <div className="flex gap-4 flex-wrap mt-4">
        <SkillCard name="TypeScript" url="https://www.typescriptlang.org" />
        <SkillCard name="Go" url="https://go.dev" />
        <SkillCard name="Python" url="https://www.python.org" />
      </div>

      <h2 className="font-bold text-2xl font-noto mt-10">Frameworks & Libraries:</h2>

      <div className="flex gap-4 flex-wrap mt-4">
        <SkillCard name="React" url="https://react.dev" />
        <SkillCard name="Vue.js" url="https://vuejs.org" />
        <SkillCard name="Next.JS" url="https://nextjs.org" />
        <SkillCard name="Nest" url="https://nestjs.com" />
      </div>

      <h2 className="font-bold text-2xl font-noto mt-10">Databases:</h2>

      <div className="flex gap-4 flex-wrap mt-4">
        <SkillCard name="Postgres" url="https://www.postgresql.org" />
        <SkillCard name="MongoDB" url="https://www.mongodb.com" />
      </div>

      <h2 className="font-bold text-2xl font-noto mt-10">Version Control Sytems:</h2>

      <div className="flex gap-4 flex-wrap mt-4">
        <SkillCard name="Git" url="https://git-scm.com" />
      </div>

      <h2 className="font-bold text-2xl font-noto mt-10">Containerization Tools:</h2>

      <div className="flex gap-4 flex-wrap mt-4">
        <SkillCard name="Docker" url="https://www.docker.com" />
        <SkillCard name="Docker Compose" url="https://docs.docker.com/compose" />
      </div>

      <h1 className="text-center font-extrabold text-4xl mt-28">Soft Skills</h1>

      <span className="mt-10 text-2xl">
        1. <span className="font-semibold">Communication and Team Collaboration</span>: I&apos;ve participated in some relatively small teams.
      </span>
      <span className="mt-8 text-2xl">
        2. <span className="font-semibold">Creativity</span>: I&apos;ve designed websites and APIs many times before.
      </span>
      <span className="mt-8 text-2xl">
        3. <span className="font-semibold">Problem Solving</span>: While working on my projects, I solved many problems.
      </span>
      <span className="mt-8 text-2xl">
        4. <span className="font-semibold">Feedback Acceptance</span>: I&apos;m always open to feedbacks and reviews.
      </span>
    </div>
  );
}
