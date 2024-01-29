import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';

type TooltipProps = {
    children: React.ReactNode;
    position?: 'top' | 'bottom';
};

type HoverProps = {
    children: React.ReactNode;
};

type ContentProps = {
    children: React.ReactNode;
};

const tooltipVariants = cva('border-black px-3 py-2 text-center text-xs shadow', {
    variants: {
        variant: {
            primary: 'bg-orange-400',
            secondary: 'bg-pink-500',
            light: 'bg-slate-50',
            dark: 'bg-zinc-900 text-white',
            blue: 'bg-blue-500',
            yellow: 'bg-[#f7cb46]',
            green: 'bg-green-500',
            red: 'bg-red-500',
        },
        rounded: {
            none: 'rounded-none',
            sm: 'rounded-sm',
            md: 'rounded-md',
            lg: 'rounded-lg',
            xl: 'rounded-xl',
        },
        position: {
            top: '-top-10',
            bottom: '-bottom-10',
        }
    },
    defaultVariants: {
        variant: 'primary',
        position: 'top'
    },
});

const Tooltip: React.FC<TooltipProps> & {
    Hover: React.FC<HoverProps>,
    Content: React.FC<ContentProps & VariantProps<typeof tooltipVariants>>
} = ({ children, position = 'bottom' }) => {
    const hoverElement = React.Children.toArray(children).find(
        (child) => React.isValidElement(child) && (child as any).type === Tooltip.Hover
    );

    const contentElement = React.Children.toArray(children).find(
        (child) => React.isValidElement(child) && (child as any).type === Tooltip.Content
    );

    return (
        <div className="group relative inline-block w-32 cursor-default text-center font-bold">
            {hoverElement && React.cloneElement(hoverElement as React.ReactElement)}
            {contentElement && React.cloneElement(contentElement as React.ReactElement, { position })}
        </div>
    );
}

Tooltip.Hover = function TooltipHover({ children }) {
    return <>{children}</>;
};

Tooltip.Content = function TooltipContent({ children, position, rounded, variant }) {
    return (
        <div className={`pointer-events-none absolute -left-1/3 -translate-x-0 z-10 ml-14 w-fit ${tooltipVariants({ variant, position, rounded })} opacity-0 transition-all group-hover:opacity-100`}>
            {children}
        </div>
    );
};

Tooltip.displayName = 'Tooltip';

export default Tooltip;
