import React from "react";
import Image from "next/image";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
};

type CardHeaderProps = {
  imageUrl: string;
};

type CardFooterProps = {
  children: React.ReactNode;
};

type CardBodyProps = {
  children: React.ReactNode;
};

const cardVariants = cva(
  "w-full max-w-[350px] h-full overflow-hidden border-black border-2 shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white",
  {
    variants: {
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
      },
    },
    defaultVariants: {
      rounded: "none",
    },
  },
);

const Card: React.FC<CardProps & VariantProps<typeof cardVariants>> & {
  Header: React.FC<CardHeaderProps>;
  Footer: React.FC<CardFooterProps>;
  Body: React.FC<CardBodyProps>;
} = ({ rounded = "none", children, ...props }) => {
  return (
    <div className={`${cn(cardVariants({ rounded }))}`} {...props}>
      {children}
    </div>
  );
};

Card.Header = function CardHeader({ imageUrl }: CardHeaderProps) {
  return (
    <div className="relative block w-full max-h-[300px] min-h-[250px]">
      <Image
        src={imageUrl}
        alt="thumbnail"
        layout="fill"
        objectFit="cover"
        loading="lazy"
      />
    </div>
  );
};

Card.Footer = function CardFooter({ children }: CardFooterProps) {
  return <div className="px-6 py-5 text-left h-full">{children}</div>;
};

Card.Body = function CardBody({ children }: CardBodyProps) {
  return <div className="px-6 py-5 text-justify h-full">{children}</div>;
};

Card.displayName = "Card";

export default Card;
