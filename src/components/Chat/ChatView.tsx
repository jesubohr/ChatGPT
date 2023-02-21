import type { Message } from '@/types'
import { useRef, useState } from 'react'
import { MessageView } from './Message'
import { ArrowDownIcon } from '../Icons'

interface ChatViewProps {
  messages: Message[]
}
export function ChatView({ messages }: ChatViewProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isAtBottom, setIsAtBottom] = useState(false)

  function handleScroll() {
    if (containerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current
      setIsAtBottom(scrollTop + clientHeight >= scrollHeight)
    }
  }

  function scrollToBottom() {
    if (containerRef.current) {
      // Scroll to bottom smoothly
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      className='chat-container w:full h:full overflow-y:auto'
    >
      <section className='flex flex:col ai:center'>
        {messages.map(message => (
          <MessageView key={message.id} {...message} />
        ))}
        <div className='w:full h:8rem h:12rem@sm flex-shrink:0' />
      </section>
      {
        !isAtBottom && (
          <button
            type='button'
            onClick={scrollToBottom}
            className='abs right:24 bottom:120 p:4 color:gray-80 bg:white/.1 b:1|solid|white/.1 r:100% z:10'
          >
            <ArrowDownIcon />
          </button>
        )
      }
    </div>
  )
}
