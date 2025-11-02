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
  
  // Define gradient styles directly
  // Get CSS class for level-specific styling
  const getLevelClass = (code: string) => {
    if (code.startsWith('B')) return `level-${code}`;
    if (code.startsWith('N')) return `level-${code}`;
    return 'level-default';
  };
  
  const iconSrc = levelIcons[level.code];

  return (
    <Card
      className={cn(
        'hover:shadow-2xl transition-all duration-300 overflow-hidden group',
        className
      )}
    >
      <div className={cn('h-32 relative', getLevelClass(level.code))}>
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
