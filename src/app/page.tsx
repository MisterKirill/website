import Interest from '@/components/Interest';
import Skill from '@/components/Skill';

export default function Home() {
  return (
    <div className="flex flex-col mt-20">
      <span className="font-extrabold text-7xl">
        Hello! <br />
        My name is <span className="border-b-8 border-teal-600">Kirill Siukhin</span>.
      </span>

      <span className="font-bold text-3xl mt-10 font-noto">
        I am a 16 years old front-end developer from <Interest>Russia, Yekaterinburg</Interest>
        .
        <br />
        Interested in <Interest>Web Design</Interest>, <Interest>Mobile Development</Interest>, <Interest>Chess</Interest> and <Interest>Music</Interest>.
      </span>

      <h1 className="text-center font-extrabold text-4xl mt-28">My Skills</h1>

      <div className="flex items-between justify-around mt-10">
        <div>
          <h2 className="font-bold text-2xl font-noto">Programming Languages</h2>

          <div className="flex gap-4 flex-wrap mt-4">
            <Skill name="Node.js" url="https://nodejs.org" />
            <Skill name="TypeScript" url="https://www.typescriptlang.org" />
            <Skill name="Go" url="https://go.dev" />
            <Skill name="Python" url="https://www.python.org" />
          </div>
        </div>

        <div>
          <h2 className="font-bold text-2xl font-noto">Frameworks & Libraries</h2>

          <div className="flex gap-4 flex-wrap mt-4">
            <Skill name="React" url="https://react.dev" />
            <Skill name="Next.JS" url="https://nextjs.org" />
            <Skill name="Nest" url="https://nestjs.com" />
          </div>
        </div>
      </div>

      <div className="flex items-between justify-around mt-10">
        <div>
          <h2 className="font-bold text-2xl font-noto">Databases</h2>

          <div className="flex gap-4 flex-wrap mt-4">
            <Skill name="Postgres" url="https://www.postgresql.org" />
            <Skill name="MongoDB" url="https://www.mongodb.com" />
          </div>
        </div>

        <div>
          <h2 className="font-bold text-2xl font-noto">Version Control</h2>

          <div className="flex gap-4 flex-wrap mt-4">
            <Skill name="Git" url="https://git-scm.com" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-10">
        <h2 className="font-bold text-2xl font-noto">Containerization</h2>

        <div className="flex gap-4 flex-wrap mt-4">
          <Skill name="Docker" url="https://www.docker.com" />
          <Skill name="Docker Compose" url="https://docs.docker.com/compose" />
        </div>
      </div>
    </div>
  );
}
