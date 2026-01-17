import React, { memo } from 'react';
import { cn } from '../../lib/utils';

interface BadgeProps {
  variant?: 'standard' | 'option' | 'plan';
  children: React.ReactNode;
  className?: string;
}

export const Badge = memo<BadgeProps>(({
  variant = 'standard',
  children,
  className,
}) => {
  const variants = {
    standard: 'bg-blue-500 text-white',
    option: 'bg-red-500 text-white',
    plan: 'bg-gray-700 text-white',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold uppercase tracking-wide',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
});