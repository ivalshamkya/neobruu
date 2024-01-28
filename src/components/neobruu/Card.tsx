import Image from "next/image";

type CardProps = {
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
    children: React.ReactNode
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

function Card({ rounded = 'none', children }: CardProps) {
    return (
        <div className={`w-full max-w-[350px] h-full border-black border-2 rounded-${rounded} shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white`}>
            {children}
        </div>
    );
};

Card.Header = function CardHeader({ imageUrl }: CardHeaderProps) {
    return (
        <a href="" className="relative block w-full max-h-[300px] min-h-[250px] cursor-pointer">
                <Image
                    src={imageUrl}
                    alt="thumbnail"
                    fill={true}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
        </a>
    );
}
Card.Footer = function CardFooter({ children }: CardFooterProps) {
    return (
        <div className="px-6 py-5 text-left h-full">
            {children}
        </div>
    );
}

Card.Body = function CardBody({ children }: CardBodyProps) {
    return (
        <div className="px-6 py-5 text-justify h-full">
            {children}
        </div>
    );
}

export default Card;
