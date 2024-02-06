import React from "react";
import Image from "next/image";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
};

const avatarVariants = cva(
  "relative h-16 w-16 overflow-hidden border-2 border-black bg-cover bg-center shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] duration-300",
  {
    variants: {
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
      rounded: "none",
    },
  },
);

const Avatar: React.FC<Props & VariantProps<typeof avatarVariants>> = ({
  src,
  alt,
  rounded = "none",
  ...props
}) => {
  return (
    <div className={`${cn(avatarVariants({ rounded }))}`} {...props}>
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
    </div>
  );
};

Avatar.displayName = "Avatar";

export default Avatar;
