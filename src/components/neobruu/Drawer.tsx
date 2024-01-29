'use client'
import React, { useEffect, useState } from 'react';
import { VariantProps, cva } from 'class-variance-authority';

type DrawerProps = {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
};

const drawerVariants = cva(
    'z-10 w-[300px] max-h-[100vdh] h-full overflow-y-auto border-2 border-black p-2',
    {
        variants: {
            variant: {
                primary: 'border-black bg-orange-400',
                secondary: 'border-black bg-pink-500',
                light: 'border-black bg-slate-50',
                dark: 'border-white/10 bg-zinc-900 text-white',
                blue: 'border-black bg-blue-500',
                yellow: 'border-black bg-[#f7cb46]',
                green: 'border-black bg-green-500',
                red: 'border-black bg-red-500',
                pink: 'border-black bg-[#ff7d7d]',
            },
        },
        defaultVariants: {
            variant: 'primary',
        },
    }
);

const Drawer: React.FC<DrawerProps & VariantProps<typeof drawerVariants>> = ({
    active,
    setActive,
    children,
    variant,
}) => {
    const [isVisible, setIsVisible] = useState(false);

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
            className="fixed left-0 top-0 z-50 flex h-full w-full items-start justify-start bg-black/50"
            onClick={closeDrawer}
        >
            <div
                className={`${drawerVariants({ variant })}`}
                onClick={(e) => e.stopPropagation()}
                style={{
                    transform: `translateX(${isVisible ? '0px' : '-300px'})`,
                    transition: 'transform 0.3s ease',
                }}
            >
                {children}
            </div>
        </div>
    );
};

Drawer.displayName = 'Drawer';

export default Drawer;
