import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import supabase from '@/utils/supabase';
import moment from 'moment';

async function getPost(urlName: string) {
  return supabase.from('posts').select('*').eq('url_name', urlName).single();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ name: string }>;
}): Promise<Metadata> {
  const name = (await params).name;
  const { data: post } = await getPost(name);

  if (!post) {
    return notFound();
  }

  return {
    title: post.title + " – Kirill Siukhin's Blog",
    description: post.content.substring(0, 150) + '...',
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const name = (await params).name;
  const { data: post } = await getPost(name);

  if (!post) {
    return notFound();
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-5xl mb-4 text-center leading-14">
        {post.title}
      </h1>

      <span className="font-semibold text-lg mb-8">
        Article by Kirill Siukhin &bull; {moment(post.created_at).fromNow()}
      </span>

      <span className="text-lg mb-8">{post.content}</span>

      <Link href="/blog" className="self-end hover:underline font-semibold">
        Back to articles
      </Link>
    </div>
  );
}
