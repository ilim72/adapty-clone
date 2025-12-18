import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border-light">
      <div className="container mx-auto px-4 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-semibold text-text-primary">
              Adapty
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              Блог
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              Ресурсы
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              Документация
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Войти
            </Button>
            <Button variant="primary" size="sm">
              Начать бесплатно
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
