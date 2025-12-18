import Image from 'next/image';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import AuthorMeta from '@/components/ui/AuthorMeta';

export default function FeaturedPost({ post }) {
  if (!post) return null;

  return (
    <article className="mb-space-xxl">
      <Link href={`/blog/${post.slug}`} className="group block">
        <div className="grid lg:grid-cols-2 gap-space-l items-center">
          {/* Image Section */}
          <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-surface-elevated">
            {post.coverImage ? (
              <Image
                src={post.coverImage.url}
                alt={post.coverImage.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-text-muted">
                No image
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            {post.category && (
              <Badge color={post.category.color}>
                {post.category.name}
              </Badge>
            )}

            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary leading-tight line-clamp-3 group-hover:text-primary transition-colors">
              {post.title}
            </h2>

            <p className="text-lg leading-relaxed text-text-secondary line-clamp-3">
              {post.excerpt}
            </p>

            {post.author && (
              <AuthorMeta
                author={post.author}
                date={post.publishDate}
              />
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}
