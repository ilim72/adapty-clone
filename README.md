# Adapty Blog - Современная блог-платформа

Блог-платформа на Next.js 15, Contentful CMS и Tailwind CSS в стиле Attio/Linear/Vercel/Polar.sh.

## 🚀 Быстрый старт

### 1. Установка зависимостей

```bash
npm install
```

### 2. Настройка Contentful

1. Создайте аккаунт на [contentful.com](https://www.contentful.com/)
2. Создайте новый Space
3. Перейдите в Settings → API keys → Add API key
4. Скопируйте Space ID и Content Delivery API access token

### 3. Настройка переменных окружения

Создайте файл `.env.local` в корне проекта:

```bash
cp .env.local.example .env.local
```

Заполните значения в `.env.local`:

```env
CONTENTFUL_SPACE_ID=ваш_space_id
CONTENTFUL_ACCESS_TOKEN=ваш_access_token
CONTENTFUL_PREVIEW_TOKEN=ваш_preview_token
```

### 4. Создание Content Models в Contentful

#### Blog Post (ID: `blogPost`)

- **title** (Short text) - обязательно, макс 150 символов
- **slug** (Short text) - обязательно, уникально
- **excerpt** (Long text) - обязательно, макс 300 символов
- **coverImage** (Media) - обязательно, мин 1200x630px
- **category** (Reference) → Category
- **author** (Reference) → Author
- **publishDate** (Date) - обязательно
- **featured** (Boolean) - по умолчанию false

#### Category (ID: `category`)

- **name** (Short text) - обязательно
- **slug** (Short text) - обязательно, уникально
- **color** (Short text) - обязательно, options: blue, purple, pink, orange, green, yellow

#### Author (ID: `author`)

- **name** (Short text) - обязательно
- **avatar** (Media) - обязательно, мин 200x200px
- **bio** (Long text) - опционально

### 5. Добавление тестового контента

Создайте в Contentful:

- 2-3 автора
- 3-4 категории
- 5-10 статей (одну отметьте как featured)

### 6. Запуск dev сервера

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## 📦 Технологический стек

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **CMS**: Contentful
- **Font**: Geist Sans
- **Language**: JavaScript

## 🎨 Дизайн-система

Проект использует минималистичный дизайн в стиле современных SaaS продуктов:

- Светлая тема
- Subtle shadows и rounded corners
- Generous whitespace
- Clean, flat aesthetic
- Responsive grid (5 колонок на desktop → 1 на mobile)

## 📁 Структура проекта

```
src/
├── app/
│   ├── layout.js          # Root layout с Geist Sans
│   ├── page.js            # Главная страница блога
│   └── globals.css        # Global styles
├── components/
│   ├── blog/              # Blog компоненты
│   │   ├── FeaturedPost.js
│   │   ├── BlogCard.js
│   │   ├── BlogGrid.js
│   │   ├── CategoryFilter.js
│   │   └── Pagination.js
│   ├── layout/            # Layout компоненты
│   │   ├── Header.js
│   │   └── Footer.js
│   └── ui/                # UI компоненты
│       ├── Badge.js
│       ├── Button.js
│       └── AuthorMeta.js
└── lib/
    ├── contentful.js      # Contentful API client
    └── utils.js           # Utility functions
```

## 🚢 Деплой

### Vercel (рекомендуется)

1. Push проект в Git репозиторий
2. Импортируйте проект в Vercel
3. Добавьте environment variables в настройках Vercel
4. Deploy!

```bash
npx vercel
```

## 📝 Команды

```bash
npm run dev      # Запуск dev сервера
npm run build    # Production build
npm run start    # Запуск production сервера
npm run lint     # ESLint проверка
```

## 🎯 Success Criteria

- ✅ Blog listing page отображает все посты
- ✅ Featured post выделен
- ✅ Category filters работают
- ✅ Pagination функционален
- ✅ Images оптимизированы
- ✅ Полностью responsive
- ✅ SSG (static generation)
- ✅ Контент виден в view-source
- ✅ Lighthouse score > 90

## 📄 License

Private

---

🤖 Generated with Claude Code
