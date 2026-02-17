import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import { AdPlaceholder } from '@/components/AdPlaceholder';
import { enduroModels } from '@/data/models';

export function generateStaticParams() {
  return enduroModels.map((model) => ({ slug: model.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const model = enduroModels.find((item) => item.slug === params.slug);
  if (!model) return {};
  return {
    title: `${model.brand} ${model.model} — цена в Казахстане, характеристики, плюсы и минусы`,
    description: `${model.brand} ${model.model}: средняя цена ${model.averagePriceKzt.toLocaleString('ru-RU')} ₸, технические данные, обслуживание и экспертный вывод.`
  };
}

export default function ModelPage({ params }: { params: { slug: string } }) {
  const model = enduroModels.find((item) => item.slug === params.slug);
  if (!model) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${model.brand} ${model.model}`,
    description: model.expertVerdict,
    brand: { '@type': 'Brand', name: model.brand },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'KZT',
      lowPrice: model.minPriceKzt,
      highPrice: model.maxPriceKzt,
      offerCount: 5
    }
  };

  return (
    <article className="space-y-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 className="text-3xl font-bold">{model.brand} {model.model}</h1>
      <div className="relative h-72 overflow-hidden rounded-2xl border border-white/10">
        <Image src={model.image} alt={`${model.brand} ${model.model}`} fill className="object-cover" unoptimized />
      </div>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <div className="card"><p className="text-sm text-muted">Средняя цена</p><p className="text-2xl font-bold">{model.averagePriceKzt.toLocaleString('ru-RU')} ₸</p></div>
        <div className="card"><p className="text-sm text-muted">Диапазон цены</p><p className="text-xl font-semibold">{model.minPriceKzt.toLocaleString('ru-RU')} — {model.maxPriceKzt.toLocaleString('ru-RU')} ₸</p></div>
        <div className="card"><p className="text-sm text-muted">Стоимость обслуживания</p><p className="text-xl font-semibold">{model.maintenanceCostKztYear}</p></div>
      </section>

      <section className="card grid gap-3 text-sm md:grid-cols-2">
        <p><b>Кубатура:</b> {model.displacement} cc</p>
        <p><b>Мощность:</b> {model.horsePower} л.с.</p>
        <p><b>Тип двигателя:</b> {model.engineType}</p>
        <p><b>Охлаждение:</b> {model.cooling}</p>
        <p><b>Вес:</b> {model.weightKg} кг</p>
        <p><b>Высота по седлу:</b> {model.seatHeightMm} мм</p>
        <p><b>Подвеска:</b> {model.suspension}</p>
        <p><b>Для кого:</b> {model.targetRider}</p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="card"><h2 className="mb-2 font-bold text-acid">Плюсы</h2><ul className="space-y-1 text-sm text-muted">{model.pros.map((x) => <li key={x}>• {x}</li>)}</ul></div>
        <div className="card"><h2 className="mb-2 font-bold text-accent">Минусы</h2><ul className="space-y-1 text-sm text-muted">{model.cons.map((x) => <li key={x}>• {x}</li>)}</ul></div>
        <div className="card"><h2 className="mb-2 font-bold">Типичные проблемы</h2><ul className="space-y-1 text-sm text-muted">{model.commonIssues.map((x) => <li key={x}>• {x}</li>)}</ul></div>
      </section>

      <section className="card">
        <h2 className="text-xl font-bold">Честный экспертный вывод</h2>
        <p className="mt-3 text-muted">{model.expertVerdict}</p>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="card">
          <h3 className="text-lg font-semibold">Где купить</h3>
          <ul className="mt-3 space-y-1 text-sm text-muted">
            {model.whereToBuy.map((w) => <li key={w}>• {w}</li>)}
          </ul>
        </div>
        <AdPlaceholder title="Партнерский блок: предложения дилеров и экипировки" />
      </section>
    </article>
  );
}
