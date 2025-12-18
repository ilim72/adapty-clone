// Mock data for development/testing without Contentful

export const mockCategories = [
  { id: '1', name: 'Аналитика', slug: 'analytics', color: 'blue' },
  { id: '2', name: 'Монетизация', slug: 'monetization', color: 'purple' },
  { id: '3', name: 'Гайды', slug: 'guides', color: 'green' },
];

export const mockPosts = [
  {
    id: '1',
    title: 'Как увеличить конверсию в подписку на 30%',
    slug: 'increase-subscription-conversion',
    excerpt: 'Подробный гайд по оптимизации paywall и экспериментам с ценообразованием для мобильных приложений.',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop',
      alt: 'Analytics Dashboard',
      width: 1200,
      height: 630,
    },
    category: mockCategories[0],
    author: {
      name: 'Анна Смирнова',
      avatar: {
        url: 'https://i.pravatar.cc/150?img=1',
        alt: 'Анна Смирнова',
      },
    },
    publishDate: '2025-01-15',
    featured: true,
  },
  {
    id: '2',
    title: 'Лучшие практики A/B тестирования paywall',
    slug: 'ab-testing-paywall-best-practices',
    excerpt: 'Как правильно проводить эксперименты с экраном подписки и избежать типичных ошибок.',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=750&fit=crop',
      alt: 'A/B Testing',
      width: 1200,
      height: 750,
    },
    category: mockCategories[1],
    author: {
      name: 'Дмитрий Петров',
      avatar: {
        url: 'https://i.pravatar.cc/150?img=12',
        alt: 'Дмитрий Петров',
      },
    },
    publishDate: '2025-01-12',
    featured: false,
  },
  {
    id: '3',
    title: 'Интеграция Adapty за 15 минут',
    slug: 'adapty-integration-guide',
    excerpt: 'Пошаговая инструкция по подключению Adapty SDK в iOS и Android приложения.',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=750&fit=crop',
      alt: 'Mobile Development',
      width: 1200,
      height: 750,
    },
    category: mockCategories[2],
    author: {
      name: 'Анна Смирнова',
      avatar: {
        url: 'https://i.pravatar.cc/150?img=1',
        alt: 'Анна Смирнова',
      },
    },
    publishDate: '2025-01-10',
    featured: false,
  },
  {
    id: '4',
    title: 'Анализ retention rate подписчиков',
    slug: 'subscriber-retention-analysis',
    excerpt: 'Как измерять и улучшать удержание платящих пользователей в мобильном приложении.',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=750&fit=crop',
      alt: 'Retention Analysis',
      width: 1200,
      height: 750,
    },
    category: mockCategories[0],
    author: {
      name: 'Дмитрий Петров',
      avatar: {
        url: 'https://i.pravatar.cc/150?img=12',
        alt: 'Дмитрий Петров',
      },
    },
    publishDate: '2025-01-08',
    featured: false,
  },
  {
    id: '5',
    title: 'Стратегии ценообразования для SaaS',
    slug: 'saas-pricing-strategies',
    excerpt: 'Обзор популярных моделей ценообразования и как выбрать подходящую для вашего продукта.',
    coverImage: {
      url: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&h=750&fit=crop',
      alt: 'Pricing Strategy',
      width: 1200,
      height: 750,
    },
    category: mockCategories[1],
    author: {
      name: 'Анна Смирнова',
      avatar: {
        url: 'https://i.pravatar.cc/150?img=1',
        alt: 'Анна Смирнова',
      },
    },
    publishDate: '2025-01-05',
    featured: false,
  },
];

export const mockFeaturedPost = mockPosts[0];
export const mockRegularPosts = mockPosts.slice(1);
