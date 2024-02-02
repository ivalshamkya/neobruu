'use client'
import Textarea from '@/components/neobruu/Textarea';
import { ChangeEvent, useState } from 'react';


export default function TextareaExample() {
    const [value, setValue] = useState<string>('')

    const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value)
    }

    return (
        <div className="flex gap-3">
            <Textarea name='text' value={value} placeholder='Textarea' onChange={handleInput} rows={5} variant='light' rounded='md' />
        </div>
    );
}
