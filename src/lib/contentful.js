import { createClient } from 'contentful';

// Check if Contentful is configured
const spaceId = process.env.CONTENTFUL_SPACE_ID?.trim();
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN?.trim();

const isContentfulConfigured = spaceId && accessToken;

// Initialize Contentful client only if configured
const client = isContentfulConfigured
  ? createClient({
      space: spaceId,
      accessToken: accessToken,
    })
  : null;

/**
 * Get all blog posts with pagination
 * @param {number} limit - Number of posts to fetch
 * @param {number} skip - Number of posts to skip
 * @returns {Promise<{posts: Array, total: number}>}
 */
export async function getAllPosts(limit = 100, skip = 0) {
  if (!client) {
    return { posts: [], total: 0 };
  }

  try {
    const entries = await client.getEntries({
      content_type: 'blogPost',
      limit,
      skip,
      order: '-fields.publishDate',
      include: 2, // Include linked entries (category, author)
    });

    return {
      posts: entries.items.map(mapPost),
      total: entries.total,
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return { posts: [], total: 0 };
  }
}

/**
 * Get featured blog post
 * @returns {Promise<Object|null>}
 */
export async function getFeaturedPost() {
  if (!client) {
    return null;
  }

  try {
    const entries = await client.getEntries({
      content_type: 'blogPost',
      'fields.featured[exists]': true,
      limit: 10,
      order: '-fields.publishDate',
      include: 2,
    });

    // Filter for featured posts on client side
    const featuredPosts = entries.items.filter(
      (item) => item.fields.featured === true
    );

    return featuredPosts.length > 0 ? mapPost(featuredPosts[0]) : null;
  } catch (error) {
    console.error('Error fetching featured post:', error);
    return null;
  }
}

/**
 * Get posts by category slug
 * @param {string} categorySlug - Category slug
 * @param {number} limit - Number of posts to fetch
 * @returns {Promise<{posts: Array, total: number}>}
 */
export async function getPostsByCategory(categorySlug, limit = 100) {
  if (!client) {
    return { posts: [], total: 0 };
  }

  try {
    // First get category ID
    const categories = await client.getEntries({
      content_type: 'category',
      'fields.slug': categorySlug,
      limit: 1,
    });

    if (categories.items.length === 0) {
      return { posts: [], total: 0 };
    }

    const categoryId = categories.items[0].sys.id;

    const entries = await client.getEntries({
      content_type: 'blogPost',
      'fields.category.sys.id': categoryId,
      limit,
      order: '-fields.publishDate',
      include: 2,
    });

    return {
      posts: entries.items.map(mapPost),
      total: entries.total,
    };
  } catch (error) {
    console.error('Error fetching posts by category:', error);
    return { posts: [], total: 0 };
  }
}

/**
 * Get all categories
 * @returns {Promise<Array>}
 */
export async function getAllCategories() {
  if (!client) {
    return [];
  }

  try {
    const entries = await client.getEntries({
      content_type: 'category',
      order: 'fields.name',
    });

    return entries.items.map((item) => ({
      id: item.sys.id,
      name: item.fields.name,
      slug: item.fields.slug,
      color: item.fields.color || 'blue',
    }));
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

/**
 * Map Contentful entry to clean post object
 * @param {Object} entry - Contentful entry
 * @returns {Object} Mapped post object
 */
function mapPost(entry) {
  if (!entry || !entry.fields) {
    return null;
  }

  return {
    id: entry.sys.id,
    title: entry.fields.title || '',
    slug: entry.fields.slug || '',
    excerpt: entry.fields.excerpt || '',
    coverImage: entry.fields.coverImage
      ? {
          url: `https:${entry.fields.coverImage.fields.file.url}`,
          alt: entry.fields.coverImage.fields.title || entry.fields.title || '',
          width: entry.fields.coverImage.fields.file.details.image.width,
          height: entry.fields.coverImage.fields.file.details.image.height,
        }
      : null,
    category: entry.fields.category
      ? {
          name: entry.fields.category.fields.name || '',
          slug: entry.fields.category.fields.slug || '',
          color: entry.fields.category.fields.color || 'blue',
        }
      : null,
    author: entry.fields.author
      ? {
          name: entry.fields.author.fields.name || '',
          avatar: entry.fields.author.fields.avatar
            ? {
                url: `https:${entry.fields.author.fields.avatar.fields.file.url}`,
                alt: entry.fields.author.fields.name || '',
              }
            : null,
        }
      : null,
    publishDate: entry.fields.publishDate || new Date().toISOString(),
    featured: entry.fields.featured || false,
  };
}
