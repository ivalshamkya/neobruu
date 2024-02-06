"use client";
import React, { useEffect, useState } from "react";
import { VariantProps, cva } from "class-variance-authority";

type ToastProps = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  duration?: number;
};

const toastVariants = cva("border-black p-2 shadow", {
  variants: {
    variant: {
      primary: "bg-orange-400",
      secondary: "bg-pink-500",
      light: "bg-slate-50",
      dark: "bg-zinc-900 text-white",
      blue: "bg-blue-500",
      yellow: "bg-[#f7cb46]",
      green: "bg-green-500",
      red: "bg-red-500",
      pink: "bg-[#ff7d7d]",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const Toast: React.FC<ToastProps & VariantProps<typeof toastVariants>> = ({
  active,
  setActive,
  children,
  variant,
  duration = 3000,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (active) {
      setIsVisible(true);
      timeoutId = setTimeout(() => {
        setIsVisible(false);
        setActive(false);
      }, duration);
    }

    return () => clearTimeout(timeoutId);
  }, [active, setActive, duration]);

  const closeToast = () => {
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
        opacity: isVisible ? "1" : "0",
        visibility: isVisible ? "visible" : "hidden",
        transition: "opacity 0.3s ease, visibility 0.3s ease",
      }}
      onClick={closeToast}
      className="fixed w-fit h-fit right-5 bottom-5 z-50 flex items-start justify-start"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          transform: `translateX(${isVisible ? "0px" : "300px"})`,
          transition: "transform 0.3s ease",
        }}
        className={`z-10 w-[300px] overflow-y-auto border-2 ${toastVariants({
          variant,
        })} p-2 shadow`}
      >
        {children}
      </div>
    </div>
  );
};

Toast.displayName = "Toast";

export default Toast;
