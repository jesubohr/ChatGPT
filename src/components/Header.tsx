import { MenuIcon, PlusIcon } from './Icons'

interface HeaderProps {
  title?: string
}

const actionButtonClasses =
  'flex ai:center py:4 px:4 bg:white/.1:hover bg:white/.17:active r:5 font:14 lh:1.4 outline:2|solid|white/.5:focus-visible'

export function Header({ title = 'New chat' }: HeaderProps) {
  return (
    <header className='hidden@sm sticky top:0 flex ai:center py:5 px:12 w:full color:gray-84 bg:gpt-gray bb:1|solid|white/.2 z:5'>
      <button tabIndex={1} className={actionButtonClasses}>
        <MenuIcon size={24} strokeWidth={2} />
      </button>
      <h2 className='flex:1 text:center font:16 font:regular'>{title}</h2>
      <button className={actionButtonClasses}>
        <PlusIcon size={24} strokeWidth={2} />
      </button>
    </header>
  )
}
