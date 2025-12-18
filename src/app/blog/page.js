import FeaturedPost from '@/components/blog/FeaturedPost';
import BlogGrid from '@/components/blog/BlogGrid';
import CategoryFilter from '@/components/blog/CategoryFilter';
import Pagination from '@/components/blog/Pagination';
import { getAllPosts, getFeaturedPost, getAllCategories } from '@/lib/contentful';
import { mockCategories, mockFeaturedPost, mockRegularPosts } from '@/lib/mockData';

// Enable static generation
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour (ISR)

export async function generateMetadata() {
  return {
    title: 'Блог Adapty | Статьи о мобильных подписках',
    description: 'Экспертные статьи и гайды о создании и развитии приложений с подписками',
    openGraph: {
      title: 'Блог Adapty',
      description: 'Экспертные статьи и гайды о мобильных подписках',
      type: 'website',
    },
  };
}

export default async function BlogPage() {
  let featuredPost = null;
  let posts = [];
  let categories = [];
  let useMockData = false;

  // Try to fetch from Contentful
  try {
    const [contentfulFeaturedPost, contentfulPosts, contentfulCategories] = await Promise.all([
      getFeaturedPost(),
      getAllPosts(20),
      getAllCategories(),
    ]);

    // If no data from Contentful, use mock data
    if (!contentfulFeaturedPost && contentfulPosts.posts.length === 0) {
      useMockData = true;
      featuredPost = mockFeaturedPost;
      posts = mockRegularPosts;
      categories = mockCategories;
    } else {
      featuredPost = contentfulFeaturedPost;
      posts = contentfulPosts.posts;
      categories = contentfulCategories;
    }
  } catch (error) {
    // Fallback to mock data on error
    console.error('Error fetching from Contentful:', error);
    useMockData = true;
    featuredPost = mockFeaturedPost;
    posts = mockRegularPosts;
    categories = mockCategories;
  }

  return (
    <div className="container mx-auto px-4 lg:px-8 py-12">
      {/* Featured Post */}
      {featuredPost && <FeaturedPost post={featuredPost} />}

      {/* Category Filter */}
      {categories.length > 0 && <CategoryFilter categories={categories} />}

      {/* Blog Grid */}
      <BlogGrid posts={posts} />

      {/* Pagination */}
      <Pagination currentPage={1} totalPages={3} />
    </div>
  );
}
