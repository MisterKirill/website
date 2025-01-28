import Link from 'next/link';
import moment from 'moment';
import { Post } from '@prisma/client';

export default function BlogPostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.url_name}`}>
      <div className="flex flex-col md:flex-row text-center items-center px-6 py-4 rounded-lg bg-teal-200 dark:bg-teal-700 transition-colors">
        <span className="font-bold text-2xl">{post.title}</span>
        <span className="font-medium ml-auto mt-2 md:mt-0">{moment(post.created_at).fromNow()}</span>
      </div>
    </Link>
  );
}
