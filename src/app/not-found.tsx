import { Metadata } from 'next';
import TextLink from '@/components/TextLink';

export const metadata: Metadata = {
  title: 'This page was not found',
};

export default function NotFound() {
  return (
    <div className="mt-8">
      <h1 className="text-4xl font-bold mb-4">This page was not found</h1>
      <span className="text-xl font-medium">
        Please, go to the <TextLink href="/">homepage</TextLink> or <TextLink href="/contact">contact me</TextLink> if you think there is a mistake.
      </span>
    </div>
  );
}
