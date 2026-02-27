import { cn } from '@/lib/utils'

interface GoldDividerProps {
  className?: string
  hasOrb?: boolean
}

export default function GoldDivider({ className, hasOrb = true }: GoldDividerProps) {
  return (
    <div className={cn('flex items-center gap-0 w-full', className)}>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/8 to-teal-400/30" />
      {hasOrb && (
        <div className="mx-4 flex items-center gap-1.5">
          <div className="w-1 h-1 rounded-full bg-teal-400/35" />
          <div className="w-1.5 h-1.5 rounded-full bg-teal-400/60" />
          <div className="w-1 h-1 rounded-full bg-teal-400/35" />
        </div>
      )}
      <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/8 to-teal-400/30" />
    </div>
  )
}
