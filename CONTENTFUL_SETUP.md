# Настройка Contentful CMS

Подробная инструкция по настройке Contentful для блога Adapty.

## 1. Создание аккаунта и Space

1. Перейдите на [contentful.com](https://www.contentful.com/)
2. Зарегистрируйтесь (бесплатный план подходит для тестирования)
3. Создайте новый Space:
   - Нажмите "Add space"
   - Выберите "Start from scratch"
   - Введите название: "Adapty Blog"

## 2. Создание Content Models

### 2.1 Модель: Author

1. Перейдите в Content model → Add content type
2. Название: **Author**, ID: `author`
3. Добавьте поля:

   **Field: name**
   - Type: Short text
   - Required: Yes
   - Validation: Max 100 characters

   **Field: avatar**
   - Type: Media (Single file)
   - Required: Yes
   - Validation: Images only, Min 200x200px

   **Field: bio**
   - Type: Long text
   - Required: No

4. Настройте Display field → `name`

### 2.2 Модель: Category

1. Content model → Add content type
2. Название: **Category**, ID: `category`
3. Добавьте поля:

   **Field: name**
   - Type: Short text
   - Required: Yes

   **Field: slug**
   - Type: Short text
   - Required: Yes
   - Unique: Yes
   - Validation: Pattern: `^[a-z0-9-]+$`

   **Field: color**
   - Type: Short text
   - Required: Yes
   - Appearance: Dropdown
   - Values: `blue`, `purple`, `pink`, `orange`, `green`, `yellow`

4. Display field → `name`

### 2.3 Модель: Blog Post

1. Content model → Add content type
2. Название: **Blog Post**, ID: `blogPost`
3. Добавьте поля:

   **Field: title**
   - Type: Short text
   - Required: Yes
   - Validation: Max 150 characters

   **Field: slug**
   - Type: Short text
   - Required: Yes
   - Unique: Yes
   - Validation: Pattern: `^[a-z0-9-]+$`
   - Help text: "URL-friendly version of title"

   **Field: excerpt**
   - Type: Long text
   - Required: Yes
   - Validation: Max 300 characters

   **Field: coverImage**
   - Type: Media (Single file)
   - Required: Yes
   - Validation: Images only, Min 1200x630px

   **Field: category**
   - Type: Reference (Single entry)
   - Required: Yes
   - Accept only: Category

   **Field: author**
   - Type: Reference (Single entry)
   - Required: Yes
   - Accept only: Author

   **Field: publishDate**
   - Type: Date and time
   - Required: Yes

   **Field: featured**
   - Type: Boolean
   - Required: Yes
   - Default: false
   - Help text: "Show as hero post on main page"

   **Field: content**
   - Type: Rich text
   - Required: No
   - Help text: "Full article content (optional for listing page)"

4. Display field → `title`

## 3. Получение API ключей

1. Settings → API keys → Add API key
2. Название: "Development"
3. Скопируйте:
   - **Space ID**
   - **Content Delivery API - access token**
   - **Content Preview API - access token**

4. Создайте файл `.env.local` в корне проекта:

```bash
CONTENTFUL_SPACE_ID=your_space_id_here
CONTENTFUL_ACCESS_TOKEN=your_delivery_token_here
CONTENTFUL_PREVIEW_TOKEN=your_preview_token_here
```

## 4. Добавление тестового контента

### 4.1 Создайте авторов

1. Content → Add entry → Author
2. Создайте 2 автора:

   **Автор 1:**
   - name: "Анна Смирнова"
   - avatar: Загрузите любое фото (или используйте https://i.pravatar.cc/150?img=1)
   - bio: "Product Manager в Adapty"

   **Автор 2:**
   - name: "Дмитрий Петров"
   - avatar: Загрузите фото
   - bio: "Senior Developer"

### 4.2 Создайте категории

1. Content → Add entry → Category
2. Создайте 3 категории:

   **Категория 1:**
   - name: "Аналитика"
   - slug: "analytics"
   - color: "blue"

   **Категория 2:**
   - name: "Монетизация"
   - slug: "monetization"
   - color: "purple"

   **Категория 3:**
   - name: "Гайды"
   - slug: "guides"
   - color: "green"

### 4.3 Создайте blog посты

1. Content → Add entry → Blog Post
2. Создайте минимум 5 постов (пример):

   **Пост 1 (Featured):**
   - title: "Как увеличить конверсию в подписку на 30%"
   - slug: "increase-subscription-conversion"
   - excerpt: "Подробный гайд по оптимизации paywall и экспериментам с ценообразованием для мобильных приложений."
   - coverImage: Загрузите изображение (рекомендуем Unsplash)
   - category: Выберите "Аналитика"
   - author: Выберите автора
   - publishDate: Текущая дата
   - featured: **✅ TRUE** (важно!)

   **Пост 2:**
   - title: "Лучшие практики A/B тестирования paywall"
   - slug: "ab-testing-paywall"
   - excerpt: "Как правильно проводить эксперименты с экраном подписки."
   - category: "Монетизация"
   - author: Выберите автора
   - publishDate: Текущая дата
   - featured: FALSE

   *(Создайте еще 3-4 поста аналогично)*

3. **Publish** все записи!

## 5. Проверка работы

1. Убедитесь, что `.env.local` создан и содержит правильные ключи
2. Запустите проект:

```bash
npm run dev
```

3. Откройте http://localhost:3000
4. Должны отображаться ваши статьи из Contentful

**Если видите желтый баннер "Демо-режим"** - проверьте:
- Правильность API ключей в `.env.local`
- Что все записи опубликованы (Published) в Contentful
- Что у вас есть хотя бы 1 featured пост

## 6. Рекомендации

### Изображения

Для качественных фото используйте:
- [Unsplash](https://unsplash.com/) - бесплатные стоковые фото
- [Pexels](https://www.pexels.com/) - еще один источник бесплатных фото

Рекомендуемые размеры:
- Cover images: 1200x630px (минимум)
- Author avatars: 200x200px (минимум)

### Content Best Practices

1. **Заголовки**: Краткие и емкие (до 60 символов)
2. **Excerpt**: Четкое описание статьи (150-250 символов)
3. **Featured Post**: Только 1 статья должна быть featured
4. **Slug**: Используйте латиницу, дефисы вместо пробелов

### Тестирование

После настройки проверьте:
- [ ] Featured пост отображается вверху
- [ ] Grid показывает остальные статьи (5 колонок на desktop)
- [ ] Category фильтры работают
- [ ] Изображения загружаются быстро
- [ ] Мобильная версия адаптивна

---

## Troubleshooting

**Проблема**: "No image" вместо изображений
**Решение**: Проверьте, что изображения загружены в Contentful и записи опубликованы

**Проблема**: Не загружаются данные из Contentful
**Решение**: Проверьте переменные окружения в `.env.local`, перезапустите dev server

**Проблема**: Featured пост не отображается
**Решение**: Убедитесь, что у одной из статей поле `featured` установлено в `true`

---

Готово! Теперь ваш блог подключен к Contentful CMS.
