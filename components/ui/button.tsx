'use client';

import React from 'react';
import Link from 'next/link';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}

export function Button({
  href,
  variant = 'primary',
  className = '',
  children,
  type = 'button',
  disabled,
  ...props
}: ButtonProps) {
  // Uniform 44px height, exact 4px border radius, smooth micro-interaction, zero box-shadow
  const baseStyles =
    "inline-flex items-center justify-center gap-2 h-[44px] px-5 text-xs sm:text-sm font-bold tracking-wide rounded-[4px] transition-all duration-200 ease-out select-none cursor-pointer disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0219ac] focus-visible:ring-offset-2";

  const variantStyles = {
    primary:
      "bg-[#0219ac] text-white border border-[#0219ac] hover:bg-[#031fe6] hover:border-[#031fe6] hover:-translate-y-0.5 active:translate-y-0",
    secondary:
      "bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-zinc-300 dark:border-zinc-800 hover:border-[#0219ac] hover:text-[#0219ac] hover:-translate-y-0.5 active:translate-y-0",
    outline:
      "bg-transparent text-zinc-900 dark:text-zinc-100 border border-zinc-300 dark:border-zinc-700 hover:border-[#0219ac] hover:bg-[#0219ac]/5 dark:hover:bg-[#0219ac]/15 hover:-translate-y-0.5 active:translate-y-0",
    ghost:
      "bg-transparent text-zinc-700 dark:text-zinc-300 border border-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-[#0219ac]"
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (href.startsWith('http') || href.startsWith('mailto:')) {
      return (
        <a href={href} className={combinedClassName} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
