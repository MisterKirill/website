import { Metadata } from 'next';
import Highlight from '@/components/Highlight';
import HardSkills from '@/components/home/HardSkills';
import SoftSkills from '@/components/home/SoftSkills';
import TextLink from '@/components/TextLink';

export const metadata: Metadata = {
  title: 'About Me – Kirill Siukhin',
  description:
    'The personal website of Kirill Siukhin – developer, musician and chess player.',
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
        I am a 16 years old front-end developer, live in{' '}
        <Highlight>Russia, Yekaterinburg</Highlight>.
        <br />
        Interested in <Highlight>Web Development</Highlight>,{' '}
        <Highlight>Design</Highlight>, <Highlight>Chess</Highlight> and{' '}
        <Highlight>Music</Highlight>.
      </span>

      <HardSkills />

      <div className="flex flex-col mt-28 items-start">
        <span className="font-bold text-4xl mb-4">
          Want to get in touch? <TextLink href="/contact">Contact me</TextLink>.
        </span>
      </div>
    </div>
  );
}
