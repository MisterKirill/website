import { notFound } from 'next/navigation';
import { prisma } from '@/utils/prisma';
import moment from 'moment';

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
      <h1 className="font-bold text-4xl mb-4 text-center">{post.title}</h1>

      <div className="flex gap-6 mb-8">
        <span className="font-semibold">Article by Kirill Siukhin</span>
        <span>{moment(post.created_at).fromNow()}</span>
      </div>

      <span>{post.content}</span>
    </div>
  );
}
