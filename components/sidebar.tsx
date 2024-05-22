import { cn } from '@/lib/utils'

type SidebarProps = {
  className?: string
}

export function Sidebar({className}: SidebarProps) {
  return (
    <div className={cn("flex flex-col lg:fixed bg-blue-500 h-full lg:w-[256px] top-0 left-0 px-4 border-r-2", className)}>
      Sidebar
    </div>
  )
}