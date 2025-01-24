import { Metadata } from 'next';
import TextLink from '@/components/TextLink';

export const metadata: Metadata = {
  title: 'Not Found',
};

export default function NotFound() {
  return (
    <div className="mt-8">
      <h1 className="text-5xl font-bold mb-8">Not Found</h1>
      <span className="text-lg md:text-xl font-medium">
        Please, go to the <TextLink href="/">homepage</TextLink> or <TextLink href="/contact">contact me</TextLink> if you think there is a mistake.
      </span>
    </div>
  );
}
