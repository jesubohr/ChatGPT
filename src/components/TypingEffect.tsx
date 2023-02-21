import { useEffect, useRef, useState } from 'react'

interface TypingEffectProps {
  text: string
}

export function TypingEffect({ text }: TypingEffectProps) {
  const currentIndex = useRef(0)
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (!text) return

    const randomMS = Math.floor(Math.random() * 40) + 15
    const interval = setInterval(() => {
      if (currentIndex.current >= text.length) {
        setShowCursor(false)
        clearInterval(interval)
        return
      }

      const nextIndex = text.indexOf(' ', currentIndex.current + 1)
      if (nextIndex < 0) {
        setDisplayText(text)
        currentIndex.current = text.length
        return
      }

      setDisplayText(text.slice(0, nextIndex))
      currentIndex.current += 1
    }, randomMS)

    return () => clearInterval(interval)
  }, [text])

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
