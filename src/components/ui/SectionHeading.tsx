import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  light?: boolean
  className?: string
  titleClassName?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className,
  titleClassName,
}: SectionHeadingProps) {
  const alignClass =
    align === 'center'
      ? 'mx-auto text-center'
      : align === 'right'
        ? 'ml-auto text-right'
        : 'text-left'

  return (
    <div className={cn('max-w-3xl', alignClass, className)}>
      {eyebrow && (
        <div
          className={cn(
            'ornament text-xs font-mono tracking-[0.3em] uppercase mb-5 inline-flex',
            light ? 'text-stone-500' : 'text-teal-400/60',
          )}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className={cn(
          'font-display font-bold tracking-wide leading-tight mb-4',
          'text-4xl md:text-5xl lg:text-[3.25rem]',
          light ? 'text-stone-600' : 'text-stone-100',
          titleClassName,
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'font-serif text-xl leading-relaxed',
            light ? 'text-stone-500' : 'text-stone-300',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
