import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-14 border-t border-white/10 py-10 text-sm text-muted">
      <div className="container-shell grid gap-6 md:grid-cols-3">
        <div>
          <p className="font-semibold text-text">ENDURO.KZ EXPERT</p>
          <p>Портал-каталог эндуро мотоциклов для рынка Казахстана.</p>
        </div>
        <div>
          <p className="mb-2 font-semibold text-text">Юридические документы</p>
          <ul className="space-y-1">
            <li><Link href="/legal/privacy">Privacy Policy</Link></li>
            <li><Link href="/legal/terms">Terms of Use</Link></li>
            <li><Link href="/legal/disclaimer">Disclaimer</Link></li>
            <li><Link href="/legal/cookies">Cookie Policy</Link></li>
          </ul>
        </div>
        <div>
          <p className="mb-2 font-semibold text-text">Монетизация</p>
          <p>Рекламные блоки AdSense, партнерские витрины и рейтинг-модули подготовлены.</p>
        </div>
      </div>
    </footer>
  );
}
