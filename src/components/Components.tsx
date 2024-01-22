import React from 'react'
import Code from '@/components/Code'
import ComponentWrapper from '@/components/ComponentWrapper'
import CopyCode from '@/components/CopyCode'

type Props = {
  name: string
  sub?: string
  isNew?: boolean
  component: string
  exampleComponent: JSX.Element
}

export default function Component({
  name,
  sub = '',
  isNew = false,
  component,
  exampleComponent,
}: Props) {
  return (
    <div id={name} className="relative">
      <h2 className="mb-1 text-4xl font-bold">{name}</h2>
      <h2 className="mb-5 text-lg font-light">{sub}</h2>

      <ComponentWrapper>{exampleComponent}</ComponentWrapper>

      <div className="flex justify-end mt-5">
        <CopyCode code={component} />
      </div>

      <Code code={component} header={name} />

    </div>
  )
}