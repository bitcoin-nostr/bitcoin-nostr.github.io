import type { Sku } from '@/types/catalog';

export const skus: Sku[] = [
  // Bitcoin Lesson SKUs
  {
    id: 'sku-lesson-B1-L01',
    type: 'lesson',
    refId: 'B1-L01',
    priceSats: 0,
    displayName: 'Bitcoin Basics',
    description: 'Free preview lesson',
  },
  {
    id: 'sku-lesson-B1-L02',
    type: 'lesson',
    refId: 'B1-L02',
    priceSats: 2000,
    displayName: 'Digital Scarcity',
    description: 'Understanding digital money',
  },
  {
    id: 'sku-lesson-B1-L03',
    type: 'lesson',
    refId: 'B1-L03',
    priceSats: 2000,
    displayName: 'Wallets & Keys',
    description: 'Secure your bitcoin',
  },
  // Nostr Lesson SKUs
  {
    id: 'sku-lesson-N1-L01',
    type: 'lesson',
    refId: 'N1-L01',
    priceSats: 0,
    displayName: 'Nostr Basics',
    description: 'Free preview lesson',
  },
  {
    id: 'sku-lesson-N1-L02',
    type: 'lesson',
    refId: 'N1-L02',
    priceSats: 2000,
    displayName: 'Keys & Identity',
    description: 'Your digital identity',
  },
  // Module SKUs
  {
    id: 'sku-module-B1-M01',
    type: 'module',
    refId: 'B1-M01',
    priceSats: 3500,
    displayName: 'Bitcoin Essentials',
    description: 'Save 500 sats with the bundle!',
  },
  {
    id: 'sku-module-N1-M01',
    type: 'module',
    refId: 'N1-M01',
    priceSats: 3500,
    displayName: 'Nostr Essentials',
    description: 'Save 500 sats with the bundle!',
  },
  // Level SKUs
  {
    id: 'sku-level-B1',
    type: 'level',
    refId: 'B1',
    priceSats: 20000,
    displayName: 'Complete B1 Level',
    description: 'Full Bitcoin basics course access',
  },
  {
    id: 'sku-level-N1',
    type: 'level',
    refId: 'N1',
    priceSats: 20000,
    displayName: 'Complete N1 Level',
    description: 'Full Nostr basics course access',
  },
];
