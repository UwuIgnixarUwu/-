import Link from 'next/link';

const nav = [
  { href: '/', label: 'Главная' },
  { href: '/catalog', label: 'Каталог' },
  { href: '/articles/china-vs-japan-enduro-kz', label: 'Аналитика' },
  { href: '/legal/privacy', label: 'Документы' }
];

export function Header() {
  return (
    <header className="border-b border-white/10 bg-black/20 backdrop-blur">
      <div className="container-shell flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-bold tracking-wide text-accent">
          ENDURO.KZ EXPERT
        </Link>
        <nav className="flex gap-5 text-sm text-muted">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-acid">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
