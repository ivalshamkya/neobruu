"use client";
import React, { InputHTMLAttributes, useState } from "react";
import { BsCheck } from "react-icons/bs";
import { VariantProps, cva } from "class-variance-authority";

const checkboxVariants = cva(
  "peer relative appearance-none shrink-0 w-5 h-5 mt-1 rounded border-2 hover:shadow-[2px_2px_0px_0px] focus:outline-none focus:ring-offset-0 focus:ring-1 checked:border-black checked:shadow-[2px_2px_0px_0px] disabled:border-steel-400 disabled:bg-steel-400",
  {
    variants: {
      variant: {
        primary: "border-black bg-orange-400/50 checked:bg-orange-500",
        secondary: "border-black bg-pink-500/50 checked:bg-pink-500",
        light: "border-black bg-slate-50/50 checked:bg-slate-50",
        dark: "border-black bg-zinc-900/50 text-white checked:bg-zinc-900",
        blue: "border-black bg-blue-500/50 checked:bg-blue-500",
        yellow: "border-black bg-[#f7cb46]/50 checked:bg-[#f7cb46]",
        green: "border-black bg-green-500/50 checked:bg-green-500",
        red: "border-black bg-red-500/50 checked:bg-red-500",
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

const Checkbox: React.FC<
  InputHTMLAttributes<HTMLInputElement> & VariantProps<typeof checkboxVariants>
> = ({ variant = "primary", rounded = "none" }) => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <label className="relative">
      <input
        type="checkbox"
        className={`${checkboxVariants({ variant, rounded })}`}
        checked={checked}
        onClick={() => setChecked(!checked)}
      />
      <BsCheck className="absolute top-0 left-0 w-5 h-5 mt-1 pointer-events-none hidden peer-checked:block stroke-white outline-none" />
    </label>
  );
};

Checkbox.displayName = "Checkbox";

export default Checkbox;
