import { Metadata } from 'next';
import TextLink from '@/components/TextLink';

export const metadata: Metadata = {
  title: 'Contact Me – Kirill Siukhin',
  description: 'My socials, messengers and other information about how you can reach me.',
};

export default function Contact() {
  return (
    <>
      <h1 className="font-bold text-5xl mb-8">Contact Me</h1>
      <span className="font-medium text-lg md:text-xl">
        You can reach me in the following socials and messengers: <TextLink href="https://t.me/misterkirill1">Telegram</TextLink>, <TextLink href="https://misterkirill.bsky.social">Bluesky</TextLink>, <TextLink href="https://vk.ru/ksiukhin">VK</TextLink>.
      </span>
    </>
  );
}
