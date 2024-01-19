'use client'
import { useState } from "react";
import { BsCheck } from "react-icons/bs";

type Props = {
    variant?: 'primary' | 'secondary' | 'light' | 'dark' | 'blue' | 'yellow' | 'green' | 'red' ;
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
};

export default function Checkbox({
    variant,
    rounded
}: Props) {
  const [checked, setChecked] = useState<boolean>(false);

  const getColors = () => {
    switch (variant) {
      case 'primary':
        return 'border-black bg-orange-400/50 checked:bg-orange-500';
      case 'secondary':
          return 'border-black bg-pink-500/50 checked:bg-pink-500';
      case 'light':
          return 'border-black bg-slate-50/50 checked:bg-slate-50';
      case 'dark':
          return 'border-black bg-zinc-900/50 text-white checked:bg-zinc-900';
      case 'blue':
          return 'border-black bg-blue-500/50 checked:bg-blue-500';
      case 'yellow':
          return 'border-black bg-[#f7cb46]/50 checked:bg-[#f7cb46]';
      case 'green':
          return 'border-black bg-green-500/50 checked:bg-green-500';
      case 'red':
          return 'border-black bg-red-500/50 checked:bg-red-500';
      default: 
          return 'border-black bg-orange-400/50 checked:bg-orange-400 checked:bg-orange-500';
    }
}

  return (
    <>
      <label className="relative">
        <input
          type="checkbox"
          className={`peer relative appearance-none shrink-0 w-5 h-5 mt-1
          ${getColors()}
          rounded-${rounded} border-2
          hover:shadow-[2px_2px_0px_0px]
          focus:outline-none focus:ring-offset-0 focus:ring-1
        checked:border-black checked:shadow-[2px_2px_0px_0px]
          disabled:border-steel-400 disabled:bg-steel-400`}
          checked={checked}
          onClick={() => setChecked(!checked)}
        />
        <BsCheck className="absolute top-0 left-0 w-5 h-5 mt-1 pointer-events-none hidden peer-checked:block stroke-white outline-none"></BsCheck>
      </label>
    </>
  );
};

  