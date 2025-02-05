import { Metadata } from 'next';
import supabase from '@/utils/supabase';
import BlogPostCard from '@/components/BlogPostCard';

export const metadata: Metadata = {
  title: 'Blog – Kirill Siukhin',
  description: 'My blog.',
};

export default async function Page() {
  const { data: posts, error } = await supabase.from('posts').select('*');

  return (
    <>
      <h1 className="font-bold text-5xl mb-8">Blog</h1>

      {error ? (
        <span>Failed to get posts. Please, try again later.</span>
      ) : (
        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </>
  );
}
