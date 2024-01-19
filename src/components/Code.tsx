import { highlight } from '@/lib/shiki'

const Code = async ({ code, header }: { code: string; header?: string }) => {
  const component = await highlight(code)

  return (
    <div className="code-container w-max-[700px] mt-2 rounded-md border-2 border-black bg-[#212121] text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] m1000:w-[500px] m750:h-[180px] m750:w-[350px] m400:w-full m400:text-xs">
      {header && (
        <div className="code-header flex gap-2 bg-zinc-800 border-b-2 border-b-zinc-600 text-white p-3.5 rounded-t-md">
            <div className='bg-red-600 w-3 h-3 rounded-full'></div>
            <div className='bg-yellow-500 w-3 h-3 rounded-full'></div>
            <div className='bg-green-600 w-3 h-3 rounded-full'></div>
        </div>
      )}
      <div
        className="code-content p-5 overflow-x-auto h-[400px]"
        dangerouslySetInnerHTML={{ __html: await highlight(code) }}
      />
    </div>
  )
}

export default Code
