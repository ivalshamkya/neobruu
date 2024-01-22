'use client'
import Input from '@/components/neobruu/Input';
import { useState } from 'react';


export default function InputExample() {
    const [value1, setValue1] = useState<string>('')
    const [value2, setValue2] = useState<string>('')

    return (
        <div className="flex gap-3">
            <Input type='text' name='text' value={value1} placeholder='Text' onChange={setValue1} variant='dark' rounded='full'></Input>
            <Input type='text' name='text' value={value2} placeholder='Text' onChange={setValue2} rounded='md'></Input>
        </div>
    );
}
