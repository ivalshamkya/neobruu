import React from 'react'

export default function ComponentWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex w-full items-center justify-center rounded-md border border-violet-700 bg-zinc-100 px-10 py-20 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] shadow-violet-700">
      {children}
    </div>
  )
}