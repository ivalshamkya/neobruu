import React from 'react';

type TooltipProps = {
    children: React.ReactNode;
    position?: 'top' | 'bottom';
};

type HoverProps = {
    children: React.ReactNode;
};

type ContentProps = {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'light' | 'dark' | 'blue' | 'yellow' | 'green' | 'red';
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
};

function Tooltip({ children, position = 'bottom' }: TooltipProps) {
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

Tooltip.Hover = function TooltipHover({ children }: HoverProps) {
    return <>{children}</>;
};

Tooltip.Content = function TooltipContent({ children, position, rounded = "none", variant = "primary" }: ContentProps & { position?: 'top' | 'bottom' }) {

    const getPositionStyles = () => {
        switch (position) {
            case 'top':
                return '-top-10';
            case 'bottom':
                return '-bottom-10';
            default:
                return '-top-10';
        }
    };

    const getColors = () => {
        switch (variant) {
            case 'primary':
                return 'border-black bg-orange-400';
            case 'secondary':
                return 'border-black bg-pink-500';
            case 'light':
                return 'border-black bg-slate-50';
            case 'dark':
                return 'border-black bg-zinc-900 text-white';
            case 'blue':
                return 'border-black bg-blue-500';
            case 'yellow':
                return 'border-black bg-[#f7cb46]';
            case 'green':
                return 'border-black bg-green-500';
            case 'red':
                return 'border-black bg-red-500';
            default:
                return 'border-black bg-orange-500';
        }
    }
    return (
        <div className={`pointer-events-none absolute -left-1/2 ${getPositionStyles()} z-10 ml-14 w-fit rounded-${rounded} border-2 ${getColors()} px-3 py-2 text-center text-xs shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] opacity-0 transition-all group-hover:opacity-100`}>
            {children}
        </div>
    );
};

export default Tooltip;