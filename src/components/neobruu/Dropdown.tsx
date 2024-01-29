'use client'
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

type DropdownProps = {
    children: React.ReactNode;
    label: string;
};

type ItemProps = {
    children: React.ReactNode;
};

const dropdownVariants = cva(
    'border-2 border-black',
    {
        variants: {
            variant: {
                primary: 'border-black bg-orange-400',
                secondary: 'border-black bg-pink-500',
                light: 'border-black bg-slate-50',
                dark: 'border-black bg-zinc-900 text-white',
                blue: 'border-black bg-blue-500',
                yellow: 'border-black bg-[#f7cb46]',
                green: 'border-black bg-green-500',
                red: 'border-black bg-red-500',
            },
            rounded: {
                none: 'rounded-none',
                sm: 'rounded-sm',
                md: 'rounded-md',
                lg: 'rounded-lg',
                xl: 'rounded-xl',
                full: 'rounded-full',
            },
        },
        defaultVariants: {
            variant: 'primary',
            rounded: 'none',
        },
    }
);

const Dropdown: React.FC<DropdownProps & VariantProps<typeof dropdownVariants>> & {
    Item: React.FC<ItemProps & VariantProps<typeof dropdownVariants>>
} = ({ children, label, variant = 'primary', rounded = 'none' }) => {
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
                className={`flex min-w-[250px] max-w-[500px] cursor-pointer items-center px-3 py-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[3px] active:translate-y-[3px] active:shadow-none ${cn(dropdownVariants({ variant, rounded }))}`}
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
                <div className={`absolute left-0 top-[55px] min-w-[250px] max-w-[500px] first:rounded-t-${rounded} last:rounded-b-${rounded} text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all`}>
                    {children}
                </div>
            )}
        </div>
    );
}

Dropdown.Item = function DropdownItem({ children, variant = "light" }) {
    return (
        <div className={`block cursor-pointer w-full text-left border-b-2 px-3 py-2 transition-all ease-linear duration-[100ms] hover:font-semibold ${cn(dropdownVariants({ variant }))}`}>
            {children}
        </div>
    );
};

Dropdown.displayName = 'Dropdown';

export default Dropdown;
