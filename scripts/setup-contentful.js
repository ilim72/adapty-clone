const contentful = require('contentful-management');
require('dotenv').config({ path: '.env.local' });

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const MANAGEMENT_TOKEN = process.env.CONTENTFUL_MANAGEMENT_TOKEN;

async function setupContentful() {
  try {
    console.log('🚀 Начинаю настройку Contentful...\n');

    const client = contentful.createClient({
      accessToken: MANAGEMENT_TOKEN,
    });

    const space = await client.getSpace(SPACE_ID);
    const environment = await space.getEnvironment('master');

    console.log('✅ Подключение к Space успешно\n');

    // ============================================
    // 1. Создаём Content Type: Category
    // ============================================
    console.log('📋 Создаю Category content type...');

    let categoryType;
    try {
      categoryType = await environment.getContentType('category');
      console.log('   ⚠️  Category уже существует, обновляю...');
    } catch (error) {
      categoryType = await environment.createContentTypeWithId('category', {
        name: 'Category',
        displayField: 'name',
        fields: [
          {
            id: 'name',
            name: 'Name',
            type: 'Symbol',
            required: true,
            validations: [{ size: { max: 50 } }],
          },
          {
            id: 'slug',
            name: 'Slug',
            type: 'Symbol',
            required: true,
            validations: [
              { unique: true },
              { regexp: { pattern: '^[a-z0-9-]+$' } },
            ],
          },
          {
            id: 'color',
            name: 'Color',
            type: 'Symbol',
            required: true,
            validations: [
              {
                in: ['blue', 'purple', 'pink', 'orange', 'green', 'yellow'],
              },
            ],
          },
        ],
      });
      await categoryType.publish();
      console.log('   ✅ Category создан');
    }

    // ============================================
    // 2. Создаём Content Type: Author
    // ============================================
    console.log('📋 Создаю Author content type...');

    let authorType;
    try {
      authorType = await environment.getContentType('author');
      console.log('   ⚠️  Author уже существует, пропускаю...');
    } catch (error) {
      authorType = await environment.createContentTypeWithId('author', {
        name: 'Author',
        displayField: 'name',
        fields: [
          {
            id: 'name',
            name: 'Name',
            type: 'Symbol',
            required: true,
            validations: [{ size: { max: 100 } }],
          },
          {
            id: 'avatar',
            name: 'Avatar',
            type: 'Link',
            linkType: 'Asset',
            required: true,
          },
          {
            id: 'bio',
            name: 'Bio',
            type: 'Text',
            required: false,
          },
        ],
      });
      await authorType.publish();
      console.log('   ✅ Author создан');
    }

    // ============================================
    // 3. Создаём Content Type: Blog Post
    // ============================================
    console.log('📋 Создаю Blog Post content type...');

    let blogPostType;
    try {
      blogPostType = await environment.getContentType('blogPost');
      console.log('   ⚠️  Blog Post уже существует, пропускаю...');
    } catch (error) {
      blogPostType = await environment.createContentTypeWithId('blogPost', {
        name: 'Blog Post',
        displayField: 'title',
        fields: [
          {
            id: 'title',
            name: 'Title',
            type: 'Symbol',
            required: true,
            validations: [{ size: { max: 150 } }],
          },
          {
            id: 'slug',
            name: 'Slug',
            type: 'Symbol',
            required: true,
            validations: [
              { unique: true },
              { regexp: { pattern: '^[a-z0-9-]+$' } },
            ],
          },
          {
            id: 'excerpt',
            name: 'Excerpt',
            type: 'Text',
            required: true,
            validations: [{ size: { max: 300 } }],
          },
          {
            id: 'coverImage',
            name: 'Cover Image',
            type: 'Link',
            linkType: 'Asset',
            required: true,
          },
          {
            id: 'category',
            name: 'Category',
            type: 'Link',
            linkType: 'Entry',
            required: true,
            validations: [
              {
                linkContentType: ['category'],
              },
            ],
          },
          {
            id: 'author',
            name: 'Author',
            type: 'Link',
            linkType: 'Entry',
            required: true,
            validations: [
              {
                linkContentType: ['author'],
              },
            ],
          },
          {
            id: 'publishDate',
            name: 'Publish Date',
            type: 'Date',
            required: true,
          },
          {
            id: 'featured',
            name: 'Featured',
            type: 'Boolean',
            required: false,
          },
        ],
      });
      await blogPostType.publish();
      console.log('   ✅ Blog Post создан');
    }

    console.log('\n✅ Все content types созданы!\n');

    // ============================================
    // 4. Создаём Categories
    // ============================================
    console.log('📦 Создаю категории...');

    const categories = [
      { name: 'Аналитика', slug: 'analytics', color: 'blue' },
      { name: 'Монетизация', slug: 'monetization', color: 'purple' },
      { name: 'Гайды', slug: 'guides', color: 'green' },
    ];

    const createdCategories = [];
    for (const cat of categories) {
      try {
        const entry = await environment.createEntry('category', {
          fields: {
            name: { 'en-US': cat.name },
            slug: { 'en-US': cat.slug },
            color: { 'en-US': cat.color },
          },
        });
        await entry.publish();
        createdCategories.push(entry);
        console.log(`   ✅ ${cat.name}`);
      } catch (error) {
        console.log(`   ⚠️  ${cat.name} уже существует или ошибка: ${error.message}`);
      }
    }

    // ============================================
    // 5. Загружаем изображения и создаём Author
    // ============================================
    console.log('\n📦 Создаю автора...');

    // Создаём аватар автора (placeholder)
    let authorAvatar;
    try {
      authorAvatar = await environment.createAssetFromFiles({
        fields: {
          title: { 'en-US': 'Author Avatar' },
          file: {
            'en-US': {
              contentType: 'image/jpeg',
              fileName: 'avatar.jpg',
              upload: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
            },
          },
        },
      });
      await authorAvatar.processForAllLocales();
      await new Promise(resolve => setTimeout(resolve, 3000)); // Ждём обработку
      authorAvatar = await environment.getAsset(authorAvatar.sys.id);
      await authorAvatar.publish();
      console.log('   ✅ Аватар загружен');
    } catch (error) {
      console.log('   ⚠️  Ошибка загрузки аватара:', error.message);
    }

    // Создаём автора
    let author;
    try {
      author = await environment.createEntry('author', {
        fields: {
          name: { 'en-US': 'Александр Петров' },
          avatar: {
            'en-US': {
              sys: { type: 'Link', linkType: 'Asset', id: authorAvatar.sys.id },
            },
          },
          bio: { 'en-US': 'Эксперт по мобильным подпискам и монетизации приложений' },
        },
      });
      await author.publish();
      console.log('   ✅ Автор создан');
    } catch (error) {
      console.log('   ⚠️  Ошибка создания автора:', error.message);
    }

    // ============================================
    // 6. Создаём Blog Posts
    // ============================================
    console.log('\n📦 Создаю посты блога...');

    const posts = [
      {
        title: 'Как увеличить конверсию в подписку на 40%',
        slug: 'kak-uvelichit-conversiyu-v-podpisku',
        excerpt: 'Разбираем проверенные стратегии и A/B тесты, которые помогли нашим клиентам значительно увеличить конверсию в платных пользователей.',
        category: 0, // Аналитика
        featured: true,
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop',
      },
      {
        title: 'Лучшие практики онбординга для подписочных приложений',
        slug: 'luchshie-praktiki-onbordinga',
        excerpt: 'Изучаем, как правильно построить первый опыт пользователя, чтобы он захотел оформить подписку уже на первой сессии.',
        category: 2, // Гайды
        featured: false,
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop',
      },
      {
        title: 'Аналитика подписок: ключевые метрики для роста',
        slug: 'analitika-podpisok-klyuchevye-metriki',
        excerpt: 'Какие метрики действительно важны для SaaS бизнеса и как их правильно отслеживать для принятия решений.',
        category: 0, // Аналитика
        featured: false,
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop',
      },
      {
        title: 'Стратегии ценообразования для мобильных подписок',
        slug: 'strategii-cenoobrazovaniya',
        excerpt: 'Как правильно выбрать цену подписки, чтобы максимизировать выручку и не потерять пользователей.',
        category: 1, // Монетизация
        featured: false,
        imageUrl: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&h=630&fit=crop',
      },
      {
        title: 'Retention в подписочных приложениях: полное руководство',
        slug: 'retention-v-podpisochnyh-prilozheniyah',
        excerpt: 'Детальный гайд по удержанию пользователей: от первого дня до годового renewal подписки.',
        category: 2, // Гайды
        featured: false,
        imageUrl: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=630&fit=crop',
      },
    ];

    for (const post of posts) {
      try {
        // Загружаем изображение поста
        const coverImage = await environment.createAssetFromFiles({
          fields: {
            title: { 'en-US': post.title },
            file: {
              'en-US': {
                contentType: 'image/jpeg',
                fileName: `${post.slug}.jpg`,
                upload: post.imageUrl,
              },
            },
          },
        });
        await coverImage.processForAllLocales();
        await new Promise(resolve => setTimeout(resolve, 2000));
        const processedImage = await environment.getAsset(coverImage.sys.id);
        await processedImage.publish();

        // Создаём пост
        const entry = await environment.createEntry('blogPost', {
          fields: {
            title: { 'en-US': post.title },
            slug: { 'en-US': post.slug },
            excerpt: { 'en-US': post.excerpt },
            coverImage: {
              'en-US': {
                sys: { type: 'Link', linkType: 'Asset', id: processedImage.sys.id },
              },
            },
            category: {
              'en-US': {
                sys: { type: 'Link', linkType: 'Entry', id: createdCategories[post.category].sys.id },
              },
            },
            author: {
              'en-US': {
                sys: { type: 'Link', linkType: 'Entry', id: author.sys.id },
              },
            },
            publishDate: { 'en-US': new Date().toISOString() },
            featured: { 'en-US': post.featured || false },
          },
        });
        await entry.publish();
        console.log(`   ✅ ${post.title}`);
      } catch (error) {
        console.log(`   ⚠️  Ошибка создания поста "${post.title}": ${error.message}`);
      }
    }

    console.log('\n🎉 Настройка Contentful завершена!');
    console.log('\n📝 Что было создано:');
    console.log('   • 3 Content Types (Category, Author, Blog Post)');
    console.log('   • 3 категории');
    console.log('   • 1 автор');
    console.log('   • 5 постов блога (1 featured)');
    console.log('\n✅ Теперь вы можете редактировать контент в Contentful UI!');

  } catch (error) {
    console.error('\n❌ Ошибка:', error.message);
    if (error.details) {
      console.error('Детали:', JSON.stringify(error.details, null, 2));
    }
  }
}

setupContentful();
