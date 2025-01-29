import { Metadata } from 'next';
import Highlight from '@/components/Highlight';
import HardSkills from '@/components/home/HardSkills';
import SoftSkills from '@/components/home/SoftSkills';
import TextLink from '@/components/TextLink';

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
        I am a 16 years old front-end developer, live in <Highlight>Russia, Yekaterinburg</Highlight>.
        <br />
        Interested in <Highlight>Web & Mobile Development</Highlight>, <Highlight>Web Design</Highlight>, <Highlight>Chess</Highlight> and <Highlight>Music</Highlight>.
      </span>

      <h1 className="text-center font-extrabold text-4xl mt-28">Education</h1>

      <div className="flex flex-col items-center">
        <span className="mt-10 text-2xl">
          1. <span className="font-semibold">School</span> (2015-2024)
        </span>

        <span className="mt-6 text-2xl">
          2. <span className="font-semibold">IT College</span> (2024-present)
        </span>
      </div>

      <HardSkills />

      <SoftSkills />

      <div className="flex flex-col mt-28 items-start">
        <span className="font-bold text-4xl mb-4">
          Want to get in touch? <TextLink href="/contact">Contact me</TextLink>.
        </span>
      </div>
    </div>
  );
}
