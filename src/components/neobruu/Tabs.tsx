'use client'
import React, { useState, ReactNode } from 'react';

type TabsProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'light' | 'dark' | 'blue' | 'yellow' | 'green' | 'red';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
};

type TabItemProps = {
  label: string;
  children: ReactNode;
};

export default function Tabs({ children, variant = "primary", rounded = "none" }: TabsProps) {
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

    const getColors = () => {
      switch (variant) {
        case 'primary':
          return 'bg-orange-400';
        case 'secondary':
            return 'bg-pink-500';
        case 'light':
            return 'bg-slate-50';
        case 'dark':
            return 'bg-zinc-900 text-white';
        case 'blue':
            return 'bg-blue-500';
        case 'yellow':
            return 'bg-[#f7cb46]';
        case 'green':
            return 'bg-green-500';
        case 'red':
            return 'bg-red-500';
        default: 
            return 'bg-orange-500';
      }
  }

  return (
    <div>
      <div
        style={{
          gridTemplateColumns: Array(tabsArray.length)
            .fill('x')
            .map((tab: any) => '1fr')
            .join(' '),
        }}
        className={`grid w-full rounded-${rounded}`}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && (child as any).type === Tabs.Item) {
            const { label } = child.props as TabItemProps;
            return (
              <button
                key={label}
                onClick={() => handleTabClick(label)}
                className={`cursor-pointer border-2 border-black ${
                  activeTab === label ? getColors() + ' font-bold' : getColors() + '/70' 
                } px-6 py-3 text-center transition-colors first:rounded-ss-${rounded} last:rounded-se-${rounded}`}
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
    <div className='w-full'>
      {children}
    </div>
  );
};
