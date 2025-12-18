const contentful = require('contentful');

const client = contentful.createClient({
  space: 'uhlksdpbb50y',
  accessToken: 'lhHDv7vs6TWsL01BmkGHFXtSWTkUoP_spWxa63tzrig',
});

async function testConnection() {
  try {
    console.log('🔍 Проверяю подключение к Contentful...\n');

    const entries = await client.getEntries({ limit: 10 });
    console.log(`✅ Подключение успешно!`);
    console.log(`📦 Всего записей в Space: ${entries.total}`);

    if (entries.items.length > 0) {
      console.log('\n📄 Найденные записи:');
      entries.items.forEach((item, index) => {
        console.log(`${index + 1}. Type: ${item.sys.contentType?.sys.id || 'Unknown'}`);
        console.log(`   ID: ${item.sys.id}`);
      });
    } else {
      console.log('\n⚠️  Space пустой - нет записей');
    }

    const contentTypes = await client.getContentTypes();
    console.log(`\n📋 Content Types: ${contentTypes.total}`);
    if (contentTypes.items.length > 0) {
      contentTypes.items.forEach((ct, index) => {
        console.log(`${index + 1}. ${ct.name} (ID: ${ct.sys.id})`);
      });
    } else {
      console.log('⚠️  Нет content models - нужно создать');
    }

  } catch (error) {
    console.error('❌ Ошибка подключения:', error.message);
  }
}

testConnection();
