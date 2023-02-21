import { useTypingEffect } from '@/hooks'

interface TypingEffectProps {
  text: string
}

export function TypingEffect({ text }: TypingEffectProps) {
  const { displayText, showCursor } = useTypingEffect({ text })

  return (
    <span
      className={
        showCursor
          ? "content:'▮'::after @blink|1s|steps(3,start)|infinite::after"
          : ''
      }
    >
      {displayText}
    </span>
  )
}
