'use client'
import { useState } from 'react';
import { IoClose } from 'react-icons/io5'

type Props = {
    children: React.ReactNode;
    icon: React.JSX.Element;
    variant: 'primary' | 'secondary' | 'light' | 'dark' | 'blue';
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
};

export default function Alert({
    children,
    icon,
    variant = 'primary',
    rounded = 'none'
}: Props) {

    const [visible, setVisible] = useState<boolean>(true);

    const handleAlert = () => {
        setVisible(!visible);
    }

    const getColors = () => {
          switch (variant) {
            case 'primary':
              return 'border-orange-700 bg-orange-300/85 text-zinc-800';
            case 'secondary':
                return 'border-pink-700 bg-pink-400/85 text-zinc-800';
            case 'light':
                return 'border-slate-300 bg-slate-50/85 text-zinc-800';
            case 'dark':
                return 'border-zinc-900 bg-zinc-800/85 text-white';
            case 'blue':
                return 'border-blue-500 bg-blue-400 text-zinc-800';
            default: 
                return 'border-orange-500 bg-orange-400 text-zinc-800';
          }
    }

    return (
        visible && (
            <div
                className={`w-full flex cursor-pointer items-center gap-3 text-sm md:text-base rounded-${rounded} border-2 ${getColors()} shadow-[2px_2px_0px_0px] px-4 md:px-5 py-2 md:py-3 transition-all`}
            >
                <span className='text-2xl'>
                {icon}
                </span>
                {children}
                <button onClick={handleAlert} className="w-fit h-fit ml-auto p-2 rounded-lg text-zinc-900/70 hover:text-zinc-900">
                    <IoClose></IoClose>
                </button>
            </div>
        )
    );
}
