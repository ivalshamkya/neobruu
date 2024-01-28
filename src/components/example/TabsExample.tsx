'use client'
import Tabs from '@/components/neobruu/Tabs';

export default function TabsExample() {

    return (
        <div className="w-full mx-auto mt-8">
            <Tabs variant='blue' rounded='xl'>
                <Tabs.Item label='Tab 1'>
                    <h1 className='text-2xl font-bold'>Tab 1</h1>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </Tabs.Item>
                <Tabs.Item label='Tab 2'>
                    <h1 className='text-2xl font-bold'>Tab 2</h1>
                    <div>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                </Tabs.Item>
                <Tabs.Item label='Tab 3'>
                    <h1 className='text-2xl font-bold'>Tab 3</h1>
                    <div>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                </Tabs.Item>
            </Tabs>
        </div>
    );
}
