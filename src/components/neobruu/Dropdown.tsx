'use client'
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

type DropdownProps = {
    children: React.ReactNode;
    label: string;
    variant?: 'primary' | 'secondary' | 'light' | 'dark' | 'blue' | 'yellow' | 'green' | 'red';
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
};

type ItemProps = {
    children: React.ReactNode;
};

const getColors = (variant: string) => {
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
};

export default function Dropdown({ children, label, variant = 'primary', rounded = 'none' }: DropdownProps) {
    const [isActiveDropdown, setIsActiveDropdown] = useState<boolean>(false);

    const toggleDropdown = () => {
        setIsActiveDropdown(!isActiveDropdown);
    };

    return (
        <div className="relative">
            <button
                aria-haspopup="listbox"
                aria-expanded={isActiveDropdown}
                onClick={toggleDropdown}
                className={`flex min-w-[250px] max-w-[500px] cursor-pointer items-center rounded-${rounded} border-2 ${getColors(variant)} px-3 py-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[3px] active:translate-y-[3px] active:shadow-none`}
            >
                <div className="mx-auto flex justify-center items-center">
                    {label}
                    <FaChevronDown
                        style={{
                            transform: `rotate(${isActiveDropdown ? '180deg' : '0'})`,
                        }}
                        className={'ml-3 h-4 w-4 transition-transform ease-in-out'}
                    />
                </div>
            </button>
            {isActiveDropdown && (
                <div className={`absolute left-0 top-[55px] min-w-[250px] max-w-[500px] first:rounded-t-${rounded} last:rounded-b-${rounded} border-2 ${getColors(variant)} text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all`}>
                    {children}
                </div>
            )}
        </div>
    );
}

Dropdown.Item = function DropdownItem({ children, variant = "light" }: ItemProps & { variant?: 'primary' | 'secondary' | 'light' | 'dark' | 'blue' | 'yellow' | 'green' | 'red'; }) {
    return (
        <div className={`block cursor-pointer w-full text-left border-b-2 ${getColors(variant)} px-3 py-2 transition-all ease-linear duration-[100ms] hover:font-semibold`}>
            {children}
        </div>
    );
};
