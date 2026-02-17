import Image from 'next/image';
import Link from 'next/link';
import { EnduroModel } from '@/lib/types';

export function ModelCard({ model }: { model: EnduroModel }) {
  return (
    <article className="card group transition hover:shadow-glow">
      <div className="relative mb-4 h-52 overflow-hidden rounded-xl">
        <Image src={model.image} alt={`${model.brand} ${model.model}`} fill className="object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-lg font-semibold">{model.brand} {model.model}</h3>
        <span className="rounded-full bg-accent/15 px-2 py-1 text-xs text-accent">{model.displacement} cc</span>
      </div>
      <p className="text-sm text-muted">Средняя цена: {model.averagePriceKzt.toLocaleString('ru-RU')} ₸</p>
      <p className="mt-1 text-sm text-muted">Рейтинг редакции: {model.rating}/10</p>
      <Link href={`/models/${model.slug}`} className="mt-4 inline-block text-sm font-semibold text-acid">Подробнее →</Link>
    </article>
  );
}
