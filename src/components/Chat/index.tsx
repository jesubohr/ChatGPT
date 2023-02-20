import { useMessagesStore } from '@/store/messages'
import { WelcomeView } from './WelcomeView'
import { ChatView } from './ChatView'
import { ChatForm } from './ChatForm'

export function Chat() {
  const messages = useMessagesStore((state) => state.messages)

  return (
    <main className='rel flex:1 flex flex:col ai:stretch color:gray-88 overflow:hidden'>
      <div className='flex:1 overflow:hidden'>
        {messages.length === 0
          ? (<WelcomeView />)
          : (<ChatView messages={messages} />)}
      </div>
      <ChatForm />
    </main>
  )
}
