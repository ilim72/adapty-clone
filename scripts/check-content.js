const contentful = require('contentful');

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID || 'uhlksdpbb50y',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || 'lhHDv7vs6TWsL01BmkGHFXtSWTkUoP_spWxa63tzrig',
});

async function checkContent() {
  try {
    console.log('🔍 Проверяю контент из Contentful...\n');

    // Проверяем категории
    const categories = await client.getEntries({
      content_type: 'category',
      limit: 10,
    });
    console.log(`✅ Категорий: ${categories.items.length}`);
    categories.items.forEach(cat => {
      console.log(`   • ${cat.fields.name}`);
    });

    // Проверяем посты
    const posts = await client.getEntries({
      content_type: 'blogPost',
      limit: 10,
      order: '-sys.createdAt',
    });
    console.log(`\n✅ Постов: ${posts.items.length}`);
    posts.items.forEach(post => {
      console.log(`   • ${post.fields.title}`);
      console.log(`     Featured: ${post.fields.featured || false}`);
    });

    // Проверяем авторов
    const authors = await client.getEntries({
      content_type: 'author',
      limit: 10,
    });
    console.log(`\n✅ Авторов: ${authors.items.length}`);
    authors.items.forEach(author => {
      console.log(`   • ${author.fields.name}`);
    });

    console.log('\n🎉 Всё работает! Контент подтягивается из Contentful.');

  } catch (error) {
    console.error('❌ Ошибка:', error.message);
  }
}

checkContent();
