import { highlight } from "@/lib/shiki";

const Code = async ({ code, header }: { code: string; header?: string }) => {
  const component = highlight(code);

  return (
    <div className="code-container w-max-[700px] mt-2 rounded-lg border-2 border-black bg-[#212121] text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      {header && (
        <div className="code-header flex gap-2 bg-white border-b-2 border-b-zinc-600 text-white p-3.5 rounded-t-md">
          <div className="border-2 border-zinc-800 w-3 h-3 rounded-full"></div>
          <div className="border-2 border-zinc-800 w-3 h-3 rounded-full"></div>
          <div className="border-2 border-zinc-800 w-3 h-3 rounded-full"></div>
        </div>
      )}
      <div
        className="code-content p-5 overflow-x-auto max-h-[500px]"
        dangerouslySetInnerHTML={{ __html: await highlight(code) }}
      />
    </div>
  );
};

export default Code;
