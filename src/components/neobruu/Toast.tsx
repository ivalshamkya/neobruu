'use client'
import { useState, useEffect } from 'react';

type Props = {
  open: boolean;
  title?: string;
  children: React.ReactNode;
  type?: 'success' | 'error' | 'info'; 
  duration?: number; 
}

export default function Toast({ 
    open = false,
    title, 
    children, 
    type = 'info', 
    duration = 39999000
}: Props) {
  const [isVisible, setIsVisible] = useState<boolean>(open);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timeoutId);
  }, [duration]);

  return (
    isVisible && (
      <div
        className={`fixed bottom-4 right-4 rounded-lg shadow-md p-4 z-50 ${type === 'success' ? 'bg-green-500 text-white' : type === 'error' ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'}`}
      >
        {title && <h4 className="font-semibold">{title}</h4>}
        <p className="mb-2">{children}</p>
        <button
          type="button"
          className="text-gray-400 hover:text-gray-500"
          onClick={() => setIsVisible(false)}
        >
          <svg className="inline-block w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
      </div>
    )
  );
};
