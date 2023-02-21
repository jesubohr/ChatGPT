import { useEffect, useRef } from 'react'
import { setByScrollHeight } from './helpers'

interface EditMessageProps {
  message: string
  onCancel: () => void
  onSave: (message: string) => void
}

const ButtonStyles = 'd:inline-flex ai:center p:10|12 r:4'
export function EditMessage({ message, onSave, onCancel }: EditMessageProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  function handleSave() {
    const { value } = textareaRef.current as HTMLTextAreaElement
    if (!value || value.length > 256) return
    onSave(value.trim())
  }

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const textarea = event.currentTarget
    setByScrollHeight(textarea)
  }

  useEffect(() => {
    const textarea = textareaRef.current as HTMLTextAreaElement
    setByScrollHeight(textarea)
  }, [])

  return (
    <div>
      <textarea
        ref={textareaRef}
        autoFocus
        tabIndex={0}
        title='user-message'
        defaultValue={message}
        onChange={handleChange}
        className='flex:1 w:full resize:none outline:none lh:1.75'
      />
      <div className='flex jc:center gap:8 font:14'>
        <button
          type='button'
          className={`${ButtonStyles} bg:green-60 bg:green-52:hover`}
          onClick={handleSave}
        >
          Save & Submit
        </button>
        <button
          type='button'
          className={`${ButtonStyles} bg:transparent bg:fade-34:hover b:1|solid|white/.2`}
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  )
}
