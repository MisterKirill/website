import Image from "next/image";
import { Caveat } from "next/font/google";
import Button from "@/components/ui/Button";

const caveat = Caveat({ subsets: ["latin"] });

export default async function Home() {
  return (
    <main className="flex flex-col gap-5 justify-center items-center h-screen bg-neutral-800">
      <div className={`flex items-center gap-6 bg-neutral-700 p-6 rounded-lg ${caveat.className}`}>
        <Image src="/cat.png" alt="Mister Kirill avatar" width={100} height={100} />
        <div className="text-center">
          <h1 className="font-bold text-6xl text-orange-600">Mister Kirill</h1>
          <h2 className="text-2xl font-bold">Python, TypeScript developer</h2>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 px-4 justify-center">
        <a href="https://github.com/MisterKirill">
          <Button backgroundColor="#fafbfc" color="#24292e">GitHub</Button>
        </a>
        <a href="https://www.youtube.com/channel/UCPgay_A_deYP0uIt7fJ-50A">
          <Button backgroundColor="#ff0000">YouTube</Button>
        </a>
        <a href="https://t.me/misterkirill1">
          <Button backgroundColor="#24a1de">Telegram</Button>
        </a>
        <a href="https://discord.com/users/1006899291824078858">
          <Button backgroundColor="#5865f2">Discord</Button>
        </a>
      </div>
      <footer className="flex flex-col items-center text-neutral-400">
        <span>
          Source code is available on <a href="https://github.com/MisterKirill/website" className="font-semibold hover:underline">GitHub</a>.
        </span>
      </footer>
    </main>
  );
}
