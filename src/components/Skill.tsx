import Link from 'next/link';

export type SkillProps = {
  name: string;
  url: string;
};

export default function Skill({ name, url }: SkillProps) {
  return (
    <Link href={url} className="px-8 py-4 rounded-lg bg-teal-700 border-teal-500 text-teal-400 border-4 transition-transform hover:scale-90">
      <span className="font-semibold text-xl">{name}</span>
    </Link>
  );
}
