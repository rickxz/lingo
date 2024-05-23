import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { SidebarItem } from './sidebar-item'
import { ClerkLoading, ClerkLoaded, UserButton } from '@clerk/nextjs'
import { Loader } from 'lucide-react'

type SidebarProps = {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div
      className={cn(
        'flex flex-col lg:fixed h-full lg:w-[256px] top-0 left-0 px-4 border-r-2',
        className,
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/mascot.svg" alt="Mascot" width={40} height={40} />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            Lingo
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem label="Learn" href="/learn" iconSrc="/learn.svg" />
        <SidebarItem label="Quests" href="/quests" iconSrc="/quests.svg" />
        <SidebarItem
          label="Leaderboard"
          href="/leaderboard"
          iconSrc="/leaderboard.svg"
        />
        <SidebarItem label="Shop" href="/shop" iconSrc="/shop.svg" />
      </div>

      <div className="p-4">
        <ClerkLoading>
          <Loader className="size-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  )
}
