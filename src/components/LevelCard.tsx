import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DirectionalArrow } from '@/components/DirectionalArrow';
import type { Level } from '@/types/catalog';
import { cn } from '@/lib/utils';

interface LevelCardProps {
  level: Level;
  className?: string;
}

const levelColors: Record<string, string> = {
  // Bitcoin Levels - Orange/Gold gradients
  B1: 'from-orange-400 to-amber-500', // Bitcoin Basics
  B2: 'from-orange-500 to-amber-600', // Bitcoin Technology
  B3: 'from-orange-600 to-amber-700', // Bitcoin Privacy & Operations
  B4: 'from-orange-700 to-amber-800', // Lightning Mastery
  
  // Nostr Levels - Purple/Indigo gradients
  N1: 'from-purple-400 to-indigo-500', // Nostr Basics
  N2: 'from-purple-500 to-indigo-600', // Nostr Network
  N3: 'from-purple-600 to-indigo-700', // Nostr Apps & Economy
  N4: 'from-purple-700 to-indigo-800', // Advanced Nostr Development
};

const levelIcons: Record<string, string> = {
  // Bitcoin Levels - Bitcoin icon
  B1: '/bitcoin.png',
  B2: '/bitcoin.png',
  B3: '/bitcoin.png',
  B4: '/bitcoin.png',
  
  // Nostr Levels - Nostr icon
  N1: '/nostr.png',
  N2: '/nostr.png',
  N3: '/nostr.png',
  N4: '/nostr.png',
};

export function LevelCard({ level, className }: LevelCardProps) {
  const { t } = useTranslation();
  const gradientClass = levelColors[level.code] || 'from-gray-500 to-gray-600';
  const iconSrc = levelIcons[level.code];

  return (
    <Card
      className={cn(
        'hover:shadow-2xl transition-all duration-300 overflow-hidden group',
        className
      )}
    >
      <div className={cn('h-32 bg-gradient-to-br', gradientClass, 'relative')}>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="flex items-center justify-center gap-3 mb-2">
              <img 
                src={iconSrc} 
                alt={level.code.startsWith('B') ? 'Bitcoin' : 'Nostr'} 
                className="w-12 h-12 drop-shadow-lg" 
              />
              <div className="text-4xl font-bold tracking-wider">{level.code}</div>
            </div>
            <div className="text-sm font-medium opacity-90">{t(level.title)}</div>
          </div>
        </div>
      </div>

      <CardHeader className="pb-3">
        <p className="text-muted-foreground text-sm">{level.description ? t(level.description) : ''}</p>
      </CardHeader>

      <CardContent>
        <Link to={`/catalog/${level.code}`}>
          <Button className="w-full gap-2 group-hover:gap-3 transition-all" variant="outline">
            <BookOpen className="h-4 w-4" />
            {t('lesson.explore_level')}
            <DirectionalArrow direction="forward" className="h-4 w-4 ml-auto" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
