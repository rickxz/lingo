import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

type HeaderProps = {
  title: string
}

export function Header({ title }: HeaderProps) {
  return (
    <div className="flex items-center justify-between sticky top-0 bg-white pb-3 lg:pt-[28px] lg:mt-[-28px] border-b-2 mb-5 text-neutral-400 lg:z-50">
      <Link href="/courses">
        <Button variant="ghost" size="sm">
          <ArrowLeft className="size-5 stroke-2 text-neutral-500" />
        </Button>
      </Link>

      <h1 className="font-bold text-lg">{title}</h1>

      <div />
    </div>
  )
}
