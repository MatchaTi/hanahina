import { cn } from '@/lib/cn';
import type { ReactNode } from 'react';

export function TwoColumn({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12', className)}>
      {children}
    </div>
  );
}

export function TwoColumnLeft({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('prose prose-sm', className)}>{children}</div>;
}

export function TwoColumnRight({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('prose prose-sm', className)}>{children}</div>;
}
