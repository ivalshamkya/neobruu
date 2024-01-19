import React from 'react'
import Code from '@/components/Code'
import ComponentWrapper from '@/components/ComponentWrapper'
import CopyCode from '@/components/CopyCode'

type Props = {
  name: string
  component: string
  exampleComponent: JSX.Element
}

export default function Component({
  name,
  component,
  exampleComponent,
}: Props) {
  return (
    <div id={name} className="relative">
      <h2 className="mb-5 text-2xl font-bold">{name}</h2>

      <ComponentWrapper>{exampleComponent}</ComponentWrapper>

      <div className="flex justify-end mt-5">
        <CopyCode code={component} />
      </div>

      <Code code={component} header={name} />

    </div>
  )
}