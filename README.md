# ENDURO.KZ EXPERT

Профессиональный веб-портал-каталог эндуро мотоциклов для рынка Казахстана (50–600cc).

## Технологии
- Next.js 14 (App Router)
- TypeScript
- TailwindCSS
- SEO (Metadata, OpenGraph, robots.txt, sitemap, Schema.org)

## Запуск
```bash
npm install
npm run dev
```

Откройте `http://localhost:3000`.

## Production
```bash
npm run build
npm run start
```

## Структура расширения до 200+ моделей
- `data/models.ts`: вынести в БД (PostgreSQL/Supabase)
- `lib/types.ts`: единая схема типов
- `app/models/[slug]`: шаблон карточки модели
- Добавить API-слой `app/api/models/route.ts` и пагинацию/фильтры через query params

## Пример схемы базы данных
```sql
CREATE TABLE brands (
  id SERIAL PRIMARY KEY,
  name VARCHAR(80) NOT NULL,
  origin VARCHAR(30) NOT NULL
);

CREATE TABLE enduro_models (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(120) UNIQUE NOT NULL,
  brand_id INT REFERENCES brands(id),
  model VARCHAR(120) NOT NULL,
  displacement INT NOT NULL,
  horse_power INT NOT NULL,
  engine_type VARCHAR(180) NOT NULL,
  cooling VARCHAR(60) NOT NULL,
  weight_kg INT NOT NULL,
  seat_height_mm INT NOT NULL,
  suspension TEXT NOT NULL,
  rider_level VARCHAR(30) NOT NULL,
  avg_price_kzt BIGINT NOT NULL,
  min_price_kzt BIGINT NOT NULL,
  max_price_kzt BIGINT NOT NULL,
  maintenance_cost VARCHAR(120) NOT NULL,
  pros TEXT[] NOT NULL,
  cons TEXT[] NOT NULL,
  common_issues TEXT[] NOT NULL,
  expert_verdict TEXT NOT NULL,
  image_url TEXT NOT NULL,
  rating NUMERIC(2,1) NOT NULL
);

CREATE TABLE articles (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(140) UNIQUE NOT NULL,
  title VARCHAR(200) NOT NULL,
  description TEXT NOT NULL,
  category VARCHAR(80) NOT NULL,
  content_markdown TEXT NOT NULL,
  published_at DATE NOT NULL
);
```

## Монетизация
- Блоки под Google AdSense (homepage/model pages)
- Партнерские блоки “Где купить”
- Баннерные слоты
- Рейтинговая система моделей

## Юридическая часть
- Уникальные тексты
- Placeholder изображения
- Без использования логотипов брендов
- Торговые марки упоминаются только текстом
