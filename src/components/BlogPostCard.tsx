import Link from 'next/link';
import moment from 'moment';
import { Post } from '@prisma/client';

export default function BlogPostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.id}`}>
      <div className="flex flex-col md:flex-row text-center items-center gap-4 px-8 py-4 rounded-lg bg-teal-200 dark:bg-teal-700 border-teal-500 text-teal-700 dark:text-teal-400 border-4 transition-colors">
        <span className="font-bold text-3xl">{post.title}</span>
        <span className="font-medium">{moment(post.created_at).fromNow()}</span>
      </div>
    </Link>
  );
}
