'use client'
import Textarea from '@/components/neobruu/Textarea';
import { useState } from 'react';


export default function TextareaExample() {
    const [value, setValue] = useState<string>('')

    return (
        <div className="flex gap-3">
            <Textarea name='text' value={value} placeholder='Textarea' onChange={setValue} rows={5} variant='primary' rounded='md' />
        </div>
    );
}
