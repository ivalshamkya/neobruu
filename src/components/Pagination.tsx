'use client'
import { useRouter } from 'next/navigation'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import {Button} from '@/components/neobruu/Button'

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
        <Button variant='yellow' onClick={() => {
          router.push(prev.path)
        }}>
          <FaChevronLeft className="mr-2" />
          {prev.name}
        </Button>
      )}

      {next?.name && (
        <Button variant='yellow' onClick={() => {
          router.push(next.path)
        }}>
          {next.name}
          <FaChevronRight className="ml-2" />
        </Button>
      )}
    </div>
  )
}