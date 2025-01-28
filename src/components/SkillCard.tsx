import Link from 'next/link';

export type SkillCardProps = {
  name: string;
  url: string;
};

export default function SkillCard({ name, url }: SkillCardProps) {
  return (
    <Link href={url} className="shadow-lg px-8 py-4 rounded-lg bg-teal-300 dark:bg-teal-600 transition-[scale,background-color] hover:scale-90">
      <span className="font-semibold text-xl">{name}</span>
    </Link>
  );
}
