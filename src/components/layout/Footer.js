import Link from 'next/link';

const footerLinks = {
  'Продукт': [
    { label: 'Возможности', href: '#' },
    { label: 'Цены', href: '#' },
    { label: 'Интеграции', href: '#' },
    { label: 'Документация', href: '#' },
  ],
  'Компания': [
    { label: 'О нас', href: '#' },
    { label: 'Блог', href: '/' },
    { label: 'Карьера', href: '#' },
    { label: 'Контакты', href: '#' },
  ],
  'Ресурсы': [
    { label: 'Гайды', href: '#' },
    { label: 'API Reference', href: '#' },
    { label: 'Кейсы', href: '#' },
    { label: 'Сообщество', href: '#' },
  ],
  'Правовая информация': [
    { label: 'Конфиденциальность', href: '#' },
    { label: 'Условия', href: '#' },
    { label: 'Безопасность', href: '#' },
    { label: 'GDPR', href: '#' },
  ],
};

const socialLinks = [
  {
    name: 'Twitter',
    href: '#',
    icon: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
    ),
  },
  {
    name: 'GitHub',
    href: '#',
    icon: (
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-light mt-space-xxl bg-surface-elevated">
      <div className="container mx-auto px-4 lg:px-8 py-space-xl">
        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-4 hover:opacity-80 transition-opacity">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <span className="text-xl font-semibold text-text-primary">
                  Adapty
                </span>
              </div>
            </Link>
            <p className="text-sm text-text-secondary mb-4 leading-relaxed">
              Лучший способ создавать и развивать приложения с подписками.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-text-tertiary hover:text-text-primary transition-colors"
                  aria-label={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    {link.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-text-primary mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-space-m border-t border-border-light">
          <p className="text-sm text-text-tertiary text-center">
            © {new Date().getFullYear()} Adapty. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
