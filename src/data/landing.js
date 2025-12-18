export const heroContent = {
  headline: "Лучшее решение для роста мобильных покупок в приложении",
  subheadline: "Единый сервис для работы с подписками на iOS, Android, React Native, Flutter, Unity и Web. Интеграция за 30 минут.",
  primaryCTA: "Запланировать демо",
  secondaryCTA: "Начать бесплатно",
  platforms: [
    { name: "iOS", icon: "apple" },
    { name: "Android", icon: "android" },
    { name: "React Native", icon: "react" },
    { name: "Flutter", icon: "flutter" },
    { name: "Unity", icon: "unity" },
    { name: "Web", icon: "web" },
  ],
};

export const socialProof = {
  rating: 4.8,
  reviewCount: 217,
  reviewText: "отзывов",
  trustedBy: "Нам доверяют",
  clients: [
    "Flo Health",
    "Mimo",
    "Aloha",
    "JEFIT",
    "Babbel",
    "Headway",
  ],
};

export const metrics = [
  { value: "30", unit: "мин", label: "на интеграцию SDK" },
  { value: "2x", unit: "", label: "рост дохода от подписок" },
  { value: "1000+", unit: "", label: "приложений используют" },
  { value: "$0", unit: "", label: "стоимость на старте" },
];

export const features = {
  tabs: [
    {
      id: "paywall",
      title: "Конструктор пейволлов",
      description: "Создавайте и тестируйте пейволлы без кода",
      items: [
        {
          title: "Визуальный редактор",
          description: "Создавайте красивые пейволлы с помощью drag-and-drop без участия разработчиков",
          icon: "design",
        },
        {
          title: "Удалённая настройка",
          description: "Меняйте тексты, цены и дизайн без обновления приложения",
          icon: "remote",
        },
        {
          title: "Локализация",
          description: "Адаптируйте пейволлы под разные страны и языки автоматически",
          icon: "globe",
        },
      ],
    },
    {
      id: "ab-testing",
      title: "A/B тестирование",
      description: "Оптимизируйте конверсию с помощью экспериментов",
      items: [
        {
          title: "Тесты пейволлов",
          description: "Сравнивайте разные дизайны, тексты и офферы для максимальной конверсии",
          icon: "test",
        },
        {
          title: "Тесты цен",
          description: "Находите оптимальную цену для каждого сегмента пользователей",
          icon: "price",
        },
        {
          title: "Статистическая значимость",
          description: "Автоматический расчёт достоверности результатов экспериментов",
          icon: "chart",
        },
      ],
    },
    {
      id: "analytics",
      title: "Аналитика подписок",
      description: "Полная картина вашего бизнеса подписок",
      items: [
        {
          title: "Метрики в реальном времени",
          description: "MRR, LTV, Churn Rate, конверсии и другие ключевые показатели",
          icon: "metrics",
        },
        {
          title: "Когортный анализ",
          description: "Отслеживайте поведение пользователей по когортам и сегментам",
          icon: "cohort",
        },
        {
          title: "Прогнозирование",
          description: "Предсказывайте доход и отток на основе машинного обучения",
          icon: "predict",
        },
      ],
    },
  ],
};

export const moreFeatures = [
  {
    title: "Серверная валидация",
    description: "Защита от мошенничества с чеками и рефандами в реальном времени",
    icon: "shield",
  },
  {
    title: "Вебхуки и интеграции",
    description: "Отправляйте события в Amplitude, Mixpanel, Firebase и другие сервисы",
    icon: "webhook",
  },
  {
    title: "Cross-platform синхронизация",
    description: "Единая подписка на всех устройствах пользователя",
    icon: "sync",
  },
  {
    title: "Промокоды и офферы",
    description: "Создавайте специальные предложения для разных сегментов",
    icon: "offer",
  },
];

export const testimonials = [
  {
    quote: "Adapty помог нам увеличить доход от подписок в 2 раза за 3 месяца. A/B тесты пейволлов — это настоящий game changer.",
    author: "Алексей Иванов",
    title: "CEO",
    company: "FitApp",
    avatar: null,
  },
  {
    quote: "Раньше на интеграцию подписок уходило 2 недели. С Adapty мы сделали это за день. Экономия времени разработчиков колоссальная.",
    author: "Мария Петрова",
    title: "CTO",
    company: "LearnUp",
    avatar: null,
  },
  {
    quote: "Аналитика Adapty дала нам понимание, почему пользователи отменяют подписки. Мы снизили churn на 25%.",
    author: "Дмитрий Козлов",
    title: "Product Manager",
    company: "MediaStream",
    avatar: null,
  },
];

export const integrations = [
  { name: "Firebase", category: "analytics" },
  { name: "Amplitude", category: "analytics" },
  { name: "Mixpanel", category: "analytics" },
  { name: "AppsFlyer", category: "attribution" },
  { name: "Adjust", category: "attribution" },
  { name: "Branch", category: "attribution" },
  { name: "Braze", category: "engagement" },
  { name: "OneSignal", category: "engagement" },
  { name: "Stripe", category: "payments" },
  { name: "RevenueCat", category: "migration" },
];

export const pricing = {
  headline: "Простое и честное ценообразование",
  subheadline: "Начните бесплатно, платите только когда растёте",
  tiers: [
    {
      name: "Бесплатно",
      price: "$0",
      period: "/мес",
      description: "Для приложений на старте",
      features: [
        "До $10K MRR",
        "Неограниченные пейволлы",
        "A/B тестирование",
        "Базовая аналитика",
      ],
      cta: "Начать бесплатно",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "1.2%",
      period: "от дохода",
      description: "Для растущих приложений",
      features: [
        "Безлимитный MRR",
        "Продвинутая аналитика",
        "Когортный анализ",
        "Приоритетная поддержка",
        "Кастомные интеграции",
      ],
      cta: "Запланировать демо",
      highlighted: true,
    },
  ],
};

export const ctaSection = {
  headline: "Готовы увеличить доход от подписок?",
  subheadline: "Присоединяйтесь к 1000+ приложениям, которые уже используют Adapty",
  primaryCTA: "Начать бесплатно",
  secondaryCTA: "Запланировать демо",
};

export const footer = {
  description: "Лучший способ создавать и развивать приложения с подписками.",
  contact: {
    address: "104 5th Ave, New York, NY 10011",
    email: "support@adapty.io",
    phone: "(415) 800-3343",
  },
};
