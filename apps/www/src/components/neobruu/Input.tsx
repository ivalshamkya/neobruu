import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  "border-2 border-black p-[10px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all",
  {
    variants: {
      variant: {
        primary: "focus:bg-orange-200",
        secondary: "focus:bg-pink-200",
        light: "focus:bg-slate-50",
        dark: "focus:text-white focus:bg-zinc-900",
        blue: "focus:bg-blue-200",
        yellow: "focus:bg-[#f7cb46]",
        green: "focus:bg-green-200",
        red: "focus:bg-red-200",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      rounded: "none",
    },
  },
);

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, children, variant, rounded, ...props }, ref) => {
    return (
      <input
        className={cn(inputVariants({ variant, rounded, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </input>
    );
  },
);

Input.displayName = "Input";

export default Input;
