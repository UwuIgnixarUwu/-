import Link from 'next/link';
import { AdPlaceholder } from '@/components/AdPlaceholder';
import { ModelCard } from '@/components/ModelCard';
import { articleTeasers } from '@/data/articles';
import { enduroModels, featuredModels } from '@/data/models';

const categories = [
  '50–125 cc — тренировки и база',
  '150–250 cc — универсальный класс',
  '250–350 cc — оптимум для большинства',
  '350–600 cc — премиум и спорт'
];

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-card to-black p-8">
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-acid">Портал №1 по эндуро в РК</p>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight">Профессиональный каталог эндуро мотоциклов Казахстана с ценами, аналитикой и честной экспертизой</h1>
        <p className="mt-4 max-w-2xl text-muted">50–600 кубов: китайские, японские, европейские и премиальные модели. Подбор под ваш бюджет, опыт и стиль катания.</p>
        <div className="mt-6 flex gap-3">
          <Link href="/catalog" className="rounded-xl bg-accent px-5 py-3 font-semibold text-black">Открыть каталог</Link>
          <Link href="/articles/china-vs-japan-enduro-kz" className="rounded-xl border border-white/20 px-5 py-3 font-semibold">Читать аналитику</Link>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Категории по кубатуре</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((item) => (
            <div key={item} className="card text-sm text-muted">{item}</div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Популярные модели</h2>
          <Link href="/catalog" className="text-sm text-acid">Смотреть все ({enduroModels.length})</Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredModels.map((m) => <ModelCard key={m.slug} model={m} />)}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <AdPlaceholder title="Блок 970x250 — верхняя рекламная полоса" />
        <AdPlaceholder title="Партнерская витрина экипировки" />
        <AdPlaceholder title="Баннер 'Где купить' от дилеров" />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Последние статьи</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {articleTeasers.map((article) => (
            <article key={article.slug} className="card">
              <p className="text-xs uppercase tracking-wide text-acid">{article.category}</p>
              <h3 className="mt-2 text-lg font-semibold">{article.title}</h3>
              <p className="mt-2 text-sm text-muted">{article.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <h2 className="text-2xl font-bold">Блок сравнения</h2>
        <p className="mt-3 text-sm text-muted">Сравнение до 4 моделей по цене, мощности, массе и стоимости обслуживания готово к расширению под 200+ позиций.</p>
      </section>
    </div>
  );
}
