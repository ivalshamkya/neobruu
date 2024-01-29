import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';

type Props = {
    text: string;
};

const badgeVariants = cva(
    'flex cursor-default items-center text-xs font-medium hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all',
    {
        variants: {
            variant: {
                default: 'border-orange-700 bg-orange-400/70',
                pink: 'border-pink-700 bg-pink-500/70',
                light: 'text-zinc-900 border-slate-300 bg-slate-50/70',
                dark: 'border-zinc-900 bg-zinc-700/70 text-white',
                blue: 'border-blue-700 bg-blue-500/70',
                yellow: 'border-[#d3aa2f] bg-[#f7cb46]/70',
                green: 'border-green-700 bg-green-500/70',
                red: 'border-red-700 bg-red-500/70',
            },
            rounded: {
                none: 'rounded-none',
                sm: 'rounded-sm',
                md: 'rounded-md',
                lg: 'rounded-lg',
                xl: 'rounded-xl',
                full: 'rounded-full',
            },
        },
        defaultVariants: {
            variant: 'default',
            rounded: 'none',
        },
    }
);

const Badge: React.FC<Props & VariantProps<typeof badgeVariants>> = ({
    text,
    variant = 'default',
    rounded = 'none',
    ...props
}) => {
    return (
        <span className={`border p-1 ${badgeVariants({ variant, rounded })}`} {...props}>
            {text}
        </span>
    );
};

export default Badge;
