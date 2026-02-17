import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { articleTeasers, mainLongArticle } from '@/data/articles';

export function generateStaticParams() {
  return articleTeasers.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = articleTeasers.find((a) => a.slug === params.slug);
  if (!article) return {};
  return {
    title: `${article.title} | ENDURO.KZ EXPERT`,
    description: article.description,
    keywords: article.keywords
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  if (params.slug !== mainLongArticle.slug) {
    const teaser = articleTeasers.find((a) => a.slug === params.slug);
    if (!teaser) notFound();
    return <div className="card"><h1 className="text-2xl font-bold">{teaser.title}</h1><p className="mt-3 text-muted">Полная версия находится в редакционном плане публикаций.</p></div>;
  }

  const article = mainLongArticle;

  return (
    <article className="mx-auto max-w-4xl space-y-6">
      <h1 className="text-4xl font-extrabold">{article.title}</h1>
      <p className="text-muted">{article.description}</p>
      {article.content.map((block, i) => (
        <section key={i} className="card whitespace-pre-line leading-7 text-sm text-slate-200">{block}</section>
      ))}
      <section className="card">
        <h2 className="text-2xl font-bold">FAQ</h2>
        <div className="mt-4 space-y-3">
          {article.faq.map((item) => (
            <div key={item.question}>
              <h3 className="font-semibold text-acid">{item.question}</h3>
              <p className="text-sm text-muted">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
