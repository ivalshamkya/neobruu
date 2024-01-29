'use client'
import React, { useState, ReactNode } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

type TabsProps = {
  children: ReactNode;
};

type TabItemProps = {
  label: string;
  children: ReactNode;
};

const tabsVariants = cva(
  '',
  {
    variants: {
      variant: {
        primary: 'bg-orange-400',
        secondary: 'bg-pink-500',
        light: 'bg-slate-50',
        dark: 'bg-zinc-900 text-white',
        blue: 'bg-blue-500',
        yellow: 'bg-[#f7cb46]',
        green: 'bg-green-500',
        red: 'bg-red-500',
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

const Tabs: React.FC<TabsProps & VariantProps<typeof tabsVariants>> & {
  Item: React.FC<TabItemProps>
} = ({ children, variant, rounded }) => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const tabsArray: string[] = [];

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child) && (child as any).type === Tabs.Item) {
      tabsArray.push((child.props as TabItemProps).label);
    }
  });

  const handleTabClick = (label: string) => {
    setActiveTab(label);
  };

  return (
    <div>
      <div
        style={{
          gridTemplateColumns: `repeat(${tabsArray.length}, 1fr)`,
        }}
        className={`grid w-full`}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && (child as any).type === Tabs.Item) {
            const { label } = child.props as TabItemProps;
            return (
              <button
                key={label}
                onClick={() => handleTabClick(label)}
                className={`
                  cursor-pointer border-2 border-black px-3 md:px-6 py-2 md:py-3 text-center transition-colors
                  ${cn(tabsVariants({ variant }))} ${
                  activeTab === label ? 'font-bold' : 'bg-opacity-70'
                }`}
              >
                {label}
              </button>
            );
          }
          return null;
        })}
      </div>
      <div className="mt-4">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && (child as any).type === Tabs.Item) {
            const { label } = child.props as TabItemProps;
            return (
              <div key={label} style={{ display: activeTab === label ? 'block' : 'none' }}>
                {child}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

Tabs.Item = function TabItem({ children }: TabItemProps) {
  return (
    <div className="w-full">{children}</div>
  );
};

Tabs.displayName = 'Tabs';

export default Tabs;