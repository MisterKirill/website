import { Metadata } from 'next';
import { prisma } from '@/utils/prisma';
import BlogPostCard from '@/components/BlogPostCard';

export const metadata: Metadata = {
  title: 'Blog – Kirill Siukhin',
  description: 'My blog posts.',
};

export default async function Blog() {
  const posts = await prisma.post.findMany();

  return (
    <>
      <h1 className="font-bold text-5xl mb-8">Blog</h1>

      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}
