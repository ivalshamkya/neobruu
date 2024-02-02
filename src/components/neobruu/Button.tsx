'use client'
import * as React from 'react'
import Link from 'next/link'
import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-1 font-medium transition-colors border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[3px] active:translate-y-[3px] active:shadow-none',
  {
    variants: {
      variant: {
        default:
          'bg-orange-400',
        red:
          'bg-red-500',
        blue:
          'bg-blue-500',
        green:
          'bg-green-500',
        yellow:
          'bg-[#f7cb46]',
        pink: 'bg-pink-500',
        dark: 'bg-zinc-900 text-white'
      },
      size: {
        default: 'h-10 py-2 px-4 text-sm md:text-lg',
        sm: 'h-9 px-2 text-sm md:text-lg',
        lg: 'h-10 md:h-12 px-5 md:px-8 text-sm md:text-lg',
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        full: 'rounded-full'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'lg',
      rounded: 'sm'
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, href, variant, size, rounded, ...props }, ref) => {
    if (href) {
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, rounded, size, className }))}
        >
          {children}
        </Link>
      )
    }
    return (
      <button
        className={cn(buttonVariants({ variant, rounded, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }