'use client'
import Input from '@/components/neobruu/Input';
import { ChangeEvent, useState } from 'react';


export default function InputExample() {
    const [value1, setValue1] = useState<string>('')
    const [value2, setValue2] = useState<string>('')

    const handleInput1 = (e: ChangeEvent<HTMLInputElement>) => {
        setValue1(e.target.value);
    }

    const handleInput2 = (e: ChangeEvent<HTMLInputElement>) => {
        setValue2(e.target.value);
    }

    return (
        <div className="flex flex-wrap gap-3">
            <Input type='text' name='text' value={value1} placeholder='Text' onChange={handleInput1} variant='light' rounded='full'></Input>
            <Input type='text' name='text' value={value2} placeholder='Text' onChange={handleInput2} rounded='md'></Input>
        </div>
    );
}
