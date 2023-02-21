import type { Message } from '@/types'
import { ArrowDownIcon } from '../Icons'
import { MessageView } from './Message'

interface ChatViewProps {
  messages: Message[]
}
export function ChatView({ messages }: ChatViewProps) {
  return (
    <div className='w:full h:full overflow-y:auto'>
      <section className='flex flex:col ai:center'>
        {messages.map(message => (
          <MessageView key={message.id} isAI={message.ai} message={message.text} />
        ))}
        <div className='w:full h:8rem h:12rem@sm flex-shrink:0' />
      </section>
      <button
        type='button'
        className='abs right:24 bottom:120 p:4 color:gray-80 bg:white/.1 b:1|solid|white/.1 r:100% z:10'
      >
        <ArrowDownIcon />
      </button>
    </div>
  )
}
