import Image from 'next/image';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import AuthorMeta from '@/components/ui/AuthorMeta';

export default function BlogCard({ post }) {
  if (!post) return null;

  return (
    <article className="group">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="bg-white border border-border-light rounded-lg overflow-hidden transition-all duration-200 hover:shadow-card-hover hover:border-border">
          {/* Cover Image */}
          <div className="relative aspect-[16/10] overflow-hidden bg-surface-elevated">
            {post.coverImage ? (
              <Image
                src={post.coverImage.url}
                alt={post.coverImage.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-text-muted">
                No image
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {post.category && (
              <Badge color={post.category.color}>
                {post.category.name}
              </Badge>
            )}

            <h3 className="text-xl font-semibold leading-snug text-text-primary line-clamp-2 group-hover:text-primary transition-colors">
              {post.title}
            </h3>

            <p className="text-sm leading-relaxed text-text-secondary line-clamp-2">
              {post.excerpt}
            </p>

            {post.author && (
              <div className="pt-2">
                <AuthorMeta
                  author={post.author}
                  date={post.publishDate}
                  size="sm"
                />
              </div>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}
