import { Metadata } from 'next';
import { ModelCard } from '@/components/ModelCard';
import { enduroModels } from '@/data/models';

export const metadata: Metadata = {
  title: 'Каталог эндуро мотоциклов 50–600cc | ENDURO.KZ EXPERT',
  description: 'Фильтруемый каталог эндуро: кубатура, бренд, цена, тип двигателя, охлаждение и уровень райдера.'
};

export default function CatalogPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Каталог эндуро мотоциклов</h1>
      <section className="card grid gap-4 md:grid-cols-3 lg:grid-cols-6">
        {['Кубатура', 'Бренд', 'Цена', 'Тип двигателя', 'Охлаждение', 'Новичок/Профи'].map((f) => (
          <div key={f} className="rounded-xl border border-white/10 p-3 text-sm text-muted">Фильтр: {f}</div>
        ))}
      </section>
      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {enduroModels.map((model) => (
          <ModelCard key={model.slug} model={model} />
        ))}
      </section>
    </div>
  );
}
