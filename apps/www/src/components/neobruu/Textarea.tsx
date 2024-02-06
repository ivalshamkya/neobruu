import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const textAreaVariants = cva(
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
interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textAreaVariants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, children, variant, rounded, ...props }, ref) => {
    return (
      <textarea
        className={cn(textAreaVariants({ variant, rounded, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </textarea>
    );
  },
);

Textarea.displayName = "Textarea";

export default Textarea;
