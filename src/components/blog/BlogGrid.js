import BlogCard from './BlogCard';

export default function BlogGrid({ posts }) {
  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-text-secondary">Нет статей для отображения</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-space-s">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
