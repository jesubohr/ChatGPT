import { useState } from 'react'
import { useMessagesStore } from '@/store/messages'
import { TypingEffect } from '../TypingEffect'
import { EditMessage } from './EditMessage'
import { EditIcon } from '../Icons'
import { Avatar } from '../Avatar'
import { GPTLogo } from '@/assets'

const EXAMPLE_USER = 'https://avatars.githubusercontent.com/u/39781228?v=4'

interface MessageProps {
  id: number
  ai: boolean
  text: string
}

export function MessageView({ id, ai: isAI, text }: MessageProps) {
  const [isEditing, setIsEditing] = useState(false)
  const updateMessage = useMessagesStore(state => state.updateMessage)

  function toggleEditMode() {
    setIsEditing(prev => !prev)
  }

  async function sendEditedText(message: string) {
    await updateMessage({ id, text: message })
    setIsEditing(false)
  }

  return (
    <div
      className={`w:full ${
        isAI ? 'bg:gpt-light-gray' : 'bg:gpt-gray'
      } visibility:visible:hover_button`}
    >
      <article className='flex ai:start gap:16 gap:24@sm mx:auto p:16 py:24@sm max-w:42rem@md max-w:sm@lg'>
        <Avatar>
          {isAI ? <GPTLogo width='24' height='24' /> : <UserAvatar src={EXAMPLE_USER} />}
        </Avatar>
        <div className='rel flex:1 flex flex:col jc:center gap:8 gap:12@sm'>
          {!isEditing && (
            <p className='break-word lh:1.75 white-space:pre-wrap'>
              {isAI ? <TypingEffect text={text} /> : text}
            </p>
          )}
          {!isAI && !isEditing && (
            <button
              type='button'
              onClick={toggleEditMode}
              className='visibility:hidden abs@md top:5 right:0 as:end as:center@md p:4|4|5|5 color:gray-70 color:gray-86:hover bg:gray-34:hover r:5'
            >
              <EditIcon />
            </button>
          )}
          {isEditing && (
            <EditMessage
              message={text}
              onSave={sendEditedText}
              onCancel={toggleEditMode}
            />
          )}
          <div />
        </div>
      </article>
    </div>
  )
}

function UserAvatar({ src }: { src: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt='avatar' />
  )
}
