'use client'
type Props = {
    src: string;
    alt: string;
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
};

export default function Avatar({
    src,
    alt,
    rounded = 'none'
}: Props) {

    return (
        <img src={src} alt={alt} className={`h-16 w-16 rounded-${rounded} border-2 border-black bg-cover bg-center shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] duration-300`}/>
    );
}
