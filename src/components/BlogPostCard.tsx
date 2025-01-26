import Link from 'next/link';
import moment from 'moment';
import { Post } from '@prisma/client';

export default function BlogPostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.id}`}>
      <div className="flex flex-col px-8 py-4 rounded-lg bg-teal-200 dark:bg-teal-700 border-teal-500 dark:text-teal-400 border-4 transition-colors">
        <div className="flex items-center gap-4 mb-2">
          <span className="font-bold text-3xl">{post.title} – Kirill Siukhin</span>
          <span className="font-medium">{moment(post.created_at).fromNow()}</span>
        </div>

        <span className="text-lg">
          {post.content.substring(0, 100)}... <span className="font-semibold">Read full</span>
        </span>
      </div>
    </Link>
  );
}
