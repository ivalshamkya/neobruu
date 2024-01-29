'use client'
import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

type Props = {
    children: React.ReactNode;
    icon: React.JSX.Element;
};

const alertVariants = cva(
    'w-full flex justify-between cursor-pointer items-center gap-3 text-sm md:text-base shadow-[2px_2px_0px_0px] px-4 md:px-5 py-2 md:py-3 transition-all',
    {
        variants: {
            variant: {
                primary: 'border-orange-700 bg-orange-300/85 text-zinc-800',
                secondary: 'border-pink-700 bg-pink-400/85 text-zinc-800',
                light: 'border-slate-300 bg-slate-50/85 text-zinc-800',
                dark: 'border-zinc-900 bg-zinc-800/85 text-white',
                blue: 'border-blue-500 bg-blue-400 text-zinc-800',
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
            variant: 'primary',
            rounded: 'none',
        },
    }
);

const Alert: React.FC<Props & VariantProps<typeof alertVariants>> = ({
    children,
    icon,
    variant = 'primary',
    rounded = 'none',
    ...props
}) => {
    const [visible, setVisible] = useState<boolean>(true);

    const handleAlert = () => {
        setVisible(!visible);
    };

    if (!visible) return null;

    return (
        <div className={`border-2 ${cn(alertVariants({ variant, rounded }))}`} {...props}>
            <div className='flex items-center gap-3'>
                <span className='text-2xl'>{icon}</span>
                {children}
            </div>
            <button onClick={handleAlert} className="w-fit h-fit p-2 rounded-lg text-zinc-900/70 hover:text-zinc-900">
                <IoClose />
            </button>
        </div>
    );
};

Alert.displayName = 'Alert';

export default Alert;
