import { SendIcon } from '../Icons'
import { useMessagesStore } from '@/store/messages'

export function ChatForm() {
  const { addMessage } = useMessagesStore()
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const textarea = form.querySelector('textarea')!
    const message = textarea.value.trim()

    if (!message) return
    addMessage({ message })

    form.reset()
    textarea.style.height = 'auto'
  }

  function handleChange (event: React.ChangeEvent<HTMLTextAreaElement>) {
    const textarea = event.currentTarget
    textarea.style.height = 'auto'
    textarea.style.height = `${textarea.scrollHeight}px`
  }

  return (
    <div className='abs left:0 bottom:0 w:full bg:linear-gradient(180deg,#0000,#353740|58.85%)'>
      <div className='pt:8 pt:24@md inset:0' />
      <div className='mx:8 mx:auto@md pt:8 max-w:sm@md'>
        <form onSubmit={handleSubmit} className='flex gap:1 bg:gpt-chat py:12 pl:16 pr:10 b:1|solid|gray-14/.5 r:6'>
          <textarea
            rows={1}
            autoFocus
            tabIndex={0}
            title='user-message'
            name='user-message'
            onChange={handleChange}
            className='flex:1 w:full max-h:200 h:24 resize:none overflow-y:hidden outline:none lh:1.5'
          />
          <button type='submit' title='send-message' className='as:end p:4 pr:5 color:gray-62 bg:gray-10:hover r:5 outline:2|solid|white/.5:focus-visible'>
            <SendIcon />
          </button>
        </form>
      </div>
      <div className='p:8|12|12 p:12|16|24@sm text:center font:12 color:gray-70 bg:gpt-gray'>
        <a
          href='https://help.openai.com/en/articles/6825453-chatgpt-release-notes'
          className='text:underline outline:2|dashed|white/.5:focus-visible'
        >
          ChatGPT Feb 13 Version.
        </a>
        <span>
          {' '}
          Free Research Preview. Our goal is to make AI systems more natural and
          safe to interact with. Your feedback will help us improve.
        </span>
      </div>
    </div>
  )
}
