'use client'

import Image from "next/image";

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
        <div className={`relative h-16 w-16 overflow-hidden rounded-${rounded} border-2 border-black bg-cover bg-center shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] duration-300`}>
            <Image src={src} alt={alt} fill={true} />
        </div>
    );
}
