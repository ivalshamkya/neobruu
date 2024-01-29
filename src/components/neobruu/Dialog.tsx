'use client'
import React, { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

type DialogProps = {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
    title: string;
};

type DialogContentProps = {
    children: React.ReactNode;
};

type DialogFooterProps = {
    children: React.ReactNode;
};

const dialogVariants = cva(
    'z-10 w-[425px] md:w-[500px] overflow-y-auto border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
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

const Dialog: React.FC<DialogProps & VariantProps<typeof dialogVariants>> & {
    Content: React.FC<DialogContentProps>;
    Footer: React.FC<DialogFooterProps>;
} = ({
    active,
    setActive,
    children,
    title,
    variant = 'primary',
}) => {
        const [isVisible, setIsVisible] = useState(false);

        useEffect(() => {
            if (active) {
                setIsVisible(true);
            }
        }, [active, setActive]);

        const closeDialog = () => {
            setIsVisible(false);
            setTimeout(() => {
                setActive(false);
            }, 300);
        };

        return (
            <div
                style={{
                    opacity: isVisible ? '1' : '0',
                    visibility: isVisible ? 'visible' : 'hidden',
                    transition: 'opacity 0.3s ease, visibility 0.3s ease',
                }}
                className={`fixed top-0 left-0 w-screen h-screen bg-black/60 z-50 grid place-items-center`}
                onClick={closeDialog}
            >
                <div
                    className={`${cn(dialogVariants({ variant }))}`}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                        opacity: isVisible ? '1' : '0',
                        visibility: isVisible ? 'visible' : 'hidden',
                        transition: 'opacity 0.3s ease, visibility 0.3s ease',
                    }}
                    role="dialog"
                >
                    <div className="font-bold flex justify-between items-center p-2 border-b-2 border-black">
                        <h1 className='text-xl'>{title}</h1>
                        <button className='transition-all ease-in duration-100 hover:scale-150' onClick={closeDialog}>
                            <IoClose></IoClose>
                        </button>
                    </div>
                    {children}
                </div>
            </div>
        );
    };

Dialog.Content = function DialogContent({ children }: DialogContentProps) {
    return (
        <div className="p-2">{children}</div>
    );
};

Dialog.Footer = function DialogFooter({ children }: DialogFooterProps) {
    return (
        <div className="p-2 border-t-2 border-black">{children}</div>
    );
};

Dialog.displayName = 'Dialog';

export default Dialog;
