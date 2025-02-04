import SkillCard from './SkillCard';

export default function HardSkills() {
  return (
    <>
      <h1 className="text-center font-extrabold text-4xl mt-28">My Skills</h1>

      <div className="flex gap-12 justify-between flex-wrap mt-10">
        <div>
          <h2 className="font-bold text-2xl font-noto">
            Programming Languages:
          </h2>

          <div className="flex gap-4 flex-wrap mt-4">
            <SkillCard name="TypeScript" url="https://www.typescriptlang.org" />
            <SkillCard name="Go" url="https://go.dev" />
            <SkillCard name="Python" url="https://www.python.org" />
          </div>
        </div>

        <div>
          <h2 className="font-bold text-2xl font-noto">
            Frameworks & Libraries:
          </h2>

          <div className="flex gap-4 flex-wrap mt-4">
            <SkillCard name="React" url="https://react.dev" />
            <SkillCard name="Vue.js" url="https://vuejs.org" />
            <SkillCard name="Next.JS" url="https://nextjs.org" />
            <SkillCard name="Nest" url="https://nestjs.com" />
          </div>
        </div>

        <div>
          <h2 className="font-bold text-2xl font-noto">Databases:</h2>

          <div className="flex gap-4 flex-wrap mt-4">
            <SkillCard name="Postgres" url="https://www.postgresql.org" />
            <SkillCard name="MongoDB" url="https://www.mongodb.com" />
          </div>
        </div>

        <div>
          <h2 className="font-bold text-2xl font-noto">
            Version Control Sytems:
          </h2>

          <div className="flex gap-4 flex-wrap mt-4">
            <SkillCard name="Git" url="https://git-scm.com" />
          </div>
        </div>

        <div>
          <h2 className="font-bold text-2xl font-noto">
            Containerization Tools:
          </h2>

          <div className="flex gap-4 flex-wrap mt-4">
            <SkillCard name="Docker" url="https://www.docker.com" />
            <SkillCard
              name="Docker Compose"
              url="https://docs.docker.com/compose"
            />
          </div>
        </div>
      </div>
    </>
  );
}
