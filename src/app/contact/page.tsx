import { Metadata } from 'next';
import { FaGithub, FaTelegram, FaVk } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Contact Me – Kirill Siukhin',
  description:
    'My socials, messengers and other information about how you can reach me.',
};

export default function Page() {
  return (
    <>
      <h1 className="font-bold text-5xl mb-8">Contact Me</h1>

      <span className="font-medium text-lg md:text-xl">
        You can reach me in the following socials and messengers:
      </span>

      <div className="flex gap-6 mt-6">
        <a
          href="https://t.me/misterkirill1"
          className="transition-transform hover:scale-90"
          title="Telegram"
        >
          <FaTelegram size={50} />
        </a>

        <a
          href="https://github.com/MisterKirill"
          className="transition-transform hover:scale-90"
          title="GitHub"
        >
          <FaGithub size={50} />
        </a>

        <a
          href="https://vk.ru/ksiukhin"
          className="transition-transform hover:scale-90"
          title="VK"
        >
          <FaVk size={50} />
        </a>
      </div>
    </>
  );
}
