import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const selectVariants = cva(
  "border-2 border-black py-[10px] px-[20px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all",
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

interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof selectVariants> {}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, variant, rounded, ...props }, ref) => {
    return (
      <select
        className={cn(selectVariants({ variant, rounded, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </select>
    );
  },
);

Select.displayName = "Select";

export default Select;

