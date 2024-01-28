'use client'
import React, { useEffect, useState } from 'react';

type DrawerProps = {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'light' | 'dark' | 'blue' | 'yellow' | 'green' | 'red' | 'pink';
};

export default function Drawer({ active, setActive, children, variant = 'primary' }: DrawerProps) {
    const [isVisible, setIsVisible] = useState(false);

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
            case 'pink':
                return 'border-black bg-[#ff7d7d]';
            default:
                return 'border-black bg-orange-500';
        }
    }

    useEffect(() => {
        if (active) {
            setIsVisible(true);
            return () => setIsVisible(false);
        }
    }, [active]);

    const closeDrawer = () => {
        setIsVisible(false);
        setTimeout(() => {
            setActive(false);
        }, 300);
    };

    return (
        <div
            role="dialog"
            aria-modal="true"
            style={{
                opacity: isVisible ? '1' : '0',
                visibility: isVisible ? 'visible' : 'hidden',
                transition: 'opacity 0.3s ease, visibility 0.3s ease',
            }}
            onClick={closeDrawer}
            className="fixed left-0 top-0 z-50 flex h-full w-full items-start justify-start bg-gray-500/50"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    transform: `translateX(${isVisible ? '0px' : '-300px'})`,
                    transition: 'transform 0.3s ease',
                }}
                className={`z-10 w-[300px] max-h-[100vdh] h-full overflow-y-auto border-2 border-black ${getColors()} p-2`}
            >
                {children}
            </div>
        </div>
    );
}
