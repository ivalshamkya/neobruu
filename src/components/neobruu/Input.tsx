type Props = {
    name: string
    type?: 'text' | 'email' | 'number' | 'password'
    value: string
    onChange: React.Dispatch<React.SetStateAction<string>>
    placeholder: string
    variant?: 'primary' | 'secondary' | 'light' | 'dark' | 'blue' | 'yellow' | 'green' | 'red';
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export default function Input({
    name,
    type = "text",
    value,
    onChange,
    placeholder,
    variant = 'primary',
    rounded = 'none'
}: Props) {

    const getColors = () => {
        switch (variant) {
            case 'primary':
                return 'focus:bg-orange-200';
            case 'secondary':
                return 'focus:bg-pink-200';
            case 'light':
                return 'focus:bg-slate-50';
            case 'dark':
                return 'focus:text-white focus:bg-zinc-900';
            case 'blue':
                return 'focus:bg-blue-200';
            case 'yellow':
                return 'focus:bg-[#f7cb46]';
            case 'green':
                return 'focus:bg-green-200';
            case 'red':
                return 'focus:bg-red-200';
            default:
                return 'focus:bg-orange-200';
        }
    }

    return (
        <input
            className={`rounded-${rounded} border-2 border-black p-[10px] font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all ${getColors()}`}
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={(e) => {
                onChange(e.target.value)
            }}
            aria-label={placeholder}
        />
    )
}
