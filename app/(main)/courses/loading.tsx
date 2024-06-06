import { Loader } from 'lucide-react'

export default function Loading() {
  return (
    <div className="size-full flex items-center justify-center">
      <Loader className="size-6 text-muted-foreground animated-spin" />
    </div>
  )
}
