import type { Chat } from '@/types'
import {
  ChatIcon,
  ExternalIcon,
  OutIcon,
  PenIcon,
  PlusIcon,
  StarIcon,
  SunIcon,
  TrashIcon,
  UserIcon
} from './Icons'

const optionButtonClasses =
  'flex ai:center gap:12 py:12 px:12 bg:white/.04:hover r:6 font:14 lh:1.4'

export function Aside() {
  const chats: Chat[] = [
  ]

  return (
    <aside className='hidden flex@sm flex:col p:8 w:260 bg:gpt-dark-gray z:10'>
      <button
        type='button'
        className='flex ai:center gap:12 p:12 b:1|solid|#555 r:6 font:14 lh:1.4'
      >
        <PlusIcon />
        New chat
      </button>
      <nav className='flex flex:col flex:1 gap:8 mt:12 overflow-y:auto'>
        <UserChats chats={chats} />
      </nav>
      <div className='flex flex:col gap:4 pt:4 bt:1|solid|#4c4c4c'>
        <button className={optionButtonClasses}>
          <UserIcon />
          Upgrade to Plus
          <span className='flex:1' />
          <span className='place-self:flex-end pt:4 pb:2.5 px:6 color:black bg:yellow-88 r:6 font:11'>
            NEW
          </span>
        </button>
        <button className={optionButtonClasses}>
          <SunIcon />
          Light mode
        </button>
        <button className={optionButtonClasses}>
          <StarIcon />
          Improve ChatGPT
        </button>
        <button className={optionButtonClasses}>
          <ExternalIcon />
          Updates & FAQ
        </button>
        <button className={optionButtonClasses}>
          <OutIcon />
          Log out
        </button>
      </div>
    </aside>
  )
}

interface UserChatsProps {
  chats: Chat[]
}
export function UserChats({ chats }: UserChatsProps) {
  return (
    <>
      {chats.map(chat => (
        <button
          key={chat.id}
          className='rel flex ai:center gap:12 p:12 bg:gpt-gray r:6 font:14 lh:1.4'
        >
          <ChatIcon className='color:gray-90' />
          <span className='flex:1 text:start lh:1.43'>{chat.name}</span>
          <div className='abs right:4 flex color:gray-80 '>
            <button className='p:4 color:gray-98:hover'>
              <PenIcon />
            </button>
            <button className='p:4 color:gray-98:hover'>
              <TrashIcon />
            </button>
          </div>
        </button>
      ))}
    </>
  )
}
