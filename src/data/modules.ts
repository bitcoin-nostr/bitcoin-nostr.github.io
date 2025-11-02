import type { Module } from '@/types/catalog';

export const modules: Module[] = [
  // Bitcoin Learning Path Modules
  {
    id: 'B1-M01',
    level: 'B1',
    title: 'modules.B1-M01_title',
    description: 'modules.B1-M01_desc',
    lessonIds: ['B1-L01', 'B1-L02', 'B1-L03'],
  },
  {
    id: 'B2-M01',
    level: 'B2',
    title: 'modules.B2-M01_title',
    description: 'modules.B2-M01_desc',
    lessonIds: ['B2-L01', 'B2-L02'],
  },
  {
    id: 'B3-M01',
    level: 'B3',
    title: 'modules.B3-M01_title',
    description: 'modules.B3-M01_desc',
    lessonIds: ['B3-L01', 'B3-L02'],
  },
  {
    id: 'B4-M01',
    level: 'B4',
    title: 'modules.B4-M01_title',
    description: 'modules.B4-M01_desc',
    lessonIds: ['B4-L01'],
  },
  // Nostr Learning Path Modules
  {
    id: 'N1-M01',
    level: 'N1',
    title: 'modules.N1-M01_title',
    description: 'modules.N1-M01_desc',
    lessonIds: ['N1-L01', 'N1-L02'],
  },
  {
    id: 'N2-M01',
    level: 'N2',
    title: 'modules.N2-M01_title',
    description: 'modules.N2-M01_desc',
    lessonIds: ['N2-L01', 'N2-L02'],
  },
  {
    id: 'N3-M01',
    level: 'N3',
    title: 'modules.N3-M01_title',
    description: 'modules.N3-M01_desc',
    lessonIds: ['N3-L01', 'N3-L02'],
  },
  {
    id: 'N4-M01',
    level: 'N4',
    title: 'modules.N4-M01_title',
    description: 'modules.N4-M01_desc',
    lessonIds: ['N4-L01'],
  },
];
