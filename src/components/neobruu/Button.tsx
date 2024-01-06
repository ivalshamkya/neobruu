"use client"

type Props = {
    children: React.ReactNode;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    variant: 'primary' | 'secondary' | 'light' | 'dark' | 'blue';
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
};

export default function Button({
    children,
    onClick,
    variant = 'primary',
    rounded = 'none'
}: Props) {
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
            default: 
                return 'border-black bg-orange-500';
          }
    }
    return (
        <button
            role="button"
            aria-label="Click to perform an action"
            onClick={onClick}
            className={`flex cursor-pointer items-center gap-2 text-sm md:text-lg rounded-${rounded} border ${getColors()} px-4 md:px-10 py-2 md:py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[3px] active:translate-y-[3px] active:shadow-none`}
        >
            {children}
        </button>
    );
}
