'use client'
import React, { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';

type DialogProps = {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
    title: string;
    variant?: 'primary' | 'secondary' | 'light' | 'dark' | 'blue' | 'yellow' | 'green' | 'red' | 'pink';
};

type DialogContentProps = {
    children: React.ReactNode;
}

type DialogFooterProps = {
    children: React.ReactNode;
}

export default function Dialog({ active, setActive, children, title, variant = 'primary' }: DialogProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (active) {
            setIsVisible(true);
        }
    }, [active, setActive]);

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
    };

    const closeDialog = () => {
        setIsVisible(false);
        setTimeout(() => {
            setActive(false);
        }, 300);
    };

    return (
        <div className='fixed top-0 left-0 w-screen h-screen bg-black/60 z-50 grid place-items-center'>
            <div
                role="dialog"
                aria-Dialog="true"
                style={{
                    opacity: isVisible ? '1' : '0',
                    visibility: isVisible ? 'visible' : 'hidden',
                    transition: 'opacity 0.3s ease, visibility 0.3s ease',
                }}
                onClick={closeDialog}
                className=""
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    style={{
                        opacity: isVisible ? '1' : '0',
                        visibility: isVisible ? 'visible' : 'hidden',
                        transition: 'opacity 0.3s ease, visibility 0.3s ease',
                    }}
                    className={`z-10 w-[425px] md:w-[500px] overflow-y-auto border-2 border-black ${getColors()} p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}
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
        </div>
    );
};

Dialog.Content = function DialogContent({ children }: DialogContentProps) {
    return (
        <div className="p-2">{children}</div>
    );
} 

Dialog.Footer = function DialogFooter({ children }: DialogFooterProps) {
    return (
        <div className="p-2 border-t-2 border-black">{children}</div>
    );
} 