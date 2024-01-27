'use client'
type Props = {
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    variant?: 'primary' | 'secondary' | 'light' | 'dark' | 'blue' | 'yellow' | 'green' | 'red' ;
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
                return 'border-white/10 bg-zinc-900 text-white';
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
        <button
            role="button"
            aria-label="Click to perform an action"
            onClick={onClick}
            className={`flex cursor-pointer items-center gap-1 text-xs md:text-lg rounded-${rounded} border-2 ${getColors()} px-4 md:px-5 py-2 md:py-3 font-medium shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[3px] active:translate-y-[3px] active:shadow-none`}
        >
            {children}
        </button>
    );
}
