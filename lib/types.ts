export type SkillLevel = 'Новичок' | 'Продвинутый' | 'Профи' | 'Универсальный';

export interface EnduroModel {
  slug: string;
  brand: string;
  model: string;
  origin: 'Китай' | 'Япония' | 'Европа';
  displacement: number;
  horsePower: number;
  engineType: string;
  cooling: string;
  weightKg: number;
  seatHeightMm: number;
  suspension: string;
  targetRider: SkillLevel;
  averagePriceKzt: number;
  minPriceKzt: number;
  maxPriceKzt: number;
  maintenanceCostKztYear: string;
  pros: string[];
  cons: string[];
  commonIssues: string[];
  expertVerdict: string;
  image: string;
  whereToBuy: string[];
  rating: number;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  keywords: string[];
  content: string[];
  faq: { question: string; answer: string }[];
}
