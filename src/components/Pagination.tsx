'use client'
import { useRouter } from 'next/navigation'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Button from './neobruu/Button'

type Props = {
  prev?: {
    name: string
    path: string
  }
  next?: {
    name: string
    path: string
  }
}

export default function Pagination({ prev, next }: Props) {
  const router = useRouter()

  let justifyContent

  if (prev && next) {
    justifyContent = 'justify-between'
  } else if (prev) {
    justifyContent = 'justify-start'
  } else if (next) {
    justifyContent = 'justify-end'
  }

  return (
    <div className={`${justifyContent} mt-8 flex w-full items-center`}>
      {prev?.name && (
        <Button rounded='xl' variant='yellow' onClick={() => {
          router.push(prev.path)
        }}>
          <FaArrowLeft className="mr-2" />
          {prev.name}
        </Button>
      )}

      {next?.name && (
        <Button rounded='xl' variant='yellow' onClick={() => {
          router.push(next.path)
        }}>
          {next.name}
          <FaArrowRight className="ml-2" />
        </Button>
      )}
    </div>
  )
}