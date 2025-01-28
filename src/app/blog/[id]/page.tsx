import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { prisma } from '@/utils/prisma';
import moment from 'moment';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const id = (await params).id;

  const post = await prisma.post.findUnique({
    where: { id: +id },
  });

  if (!post) {
    return notFound();
  }

  return {
    title: post.title + " – Kirill Siukhin's Blog",
  };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;

  const post = await prisma.post.findUnique({
    where: { id: +id },
  });

  if (!post) {
    return notFound();
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-5xl mb-4 text-center">{post.title}</h1>

      <span className="font-semibold text-lg mb-8">Article by Kirill Siukhin &bull; {moment(post.created_at).fromNow()}</span>

      <span className="text-lg prose">{post.content}</span>
    </div>
  );
}
