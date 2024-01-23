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

export const Card: React.FC<CardProps> & {
    Header: React.FC<CardHeaderProps>;
    Footer: React.FC<CardFooterProps>;
    Body: React.FC<CardBodyProps>;
} = ({ rounded = 'none', children }) => {
    return (
        <div className={`w-[350px] h-full border-black border-2 rounded-${rounded} shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white`}>
            {children}
        </div>
    );
};

Card.Header = ({ imageUrl }) => (
    <a href="" className="block cursor-pointer h-[250px]">
        <article className="w-full h-[250px]">
            <figure className="w-full h-[250px] border-black border-b-2">
                <img
                    src={imageUrl}
                    alt="thumbnail"
                    className="w-full h-full object-cover"
                />
            </figure>
        </article>
    </a>
);

Card.Footer = ({ children }) => (
    <div className="px-6 py-5 text-left h-full">
        {children}
    </div>
);

Card.Body = ({ children }) => (
    <div className="px-6 py-5 text-left h-full">
        {children}
    </div>
);
