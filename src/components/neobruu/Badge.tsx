'use client'
type Props = {
    text: string;
    variant?: 'primary' | 'secondary' | 'light' | 'dark' | 'blue' | 'yellow' | 'green' | 'red' ;
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
};

export default function Badge({
    text,
    variant = 'primary',
    rounded = 'none'
}: Props) {
    const getColors = () => {
          switch (variant) {
            case 'primary':
              return 'border-orange-700 bg-orange-400/70';
            case 'secondary':
                return 'border-pink-700 bg-pink-500/70';
            case 'light':
                return 'text-zinc-900 border-slate-300 bg-slate-50/70';
            case 'dark':
                return 'border-zinc-900 bg-zinc-700/70 text-white';
            case 'blue':
                return 'border-blue-700 bg-blue-500/70';
            case 'yellow':
                return 'border-[#d3aa2f] bg-[#f7cb46]/70';
            case 'green':
                return 'border-green-700 bg-green-500/70';
            case 'red':
                return 'border-red-700 bg-red-500/70';
            default: 
                return 'border-orange-700 bg-orange-500/70';
          }
    }
    return (
        <span
            className={`flex cursor-default items-center text-xs rounded-${rounded} border ${getColors()} p-1 font-medium hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all`}
        >
            {text}
        </span>
    );
}
