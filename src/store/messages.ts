import type { Message } from '@/types'
import { create } from 'zustand'
import { sendPropmtToAPI } from '@/services/sendPrompt'

type State = {
  messages: Message[]
  error: string | null
  addMessage: ({ message }: { message: string }) => Promise<void>
}

export const useMessagesStore = create<State>((set, get) => ({
  messages: [] as Message[],
  error: null as string | null,
  addMessage: async ({ message }: { message: string }) => {
    const currentId = get().messages.length
    const initialState = [
      ...get().messages,
      {
        id: currentId,
        ai: false,
        text: message
      },
      {
        id: currentId + 1,
        ai: true,
        text: ''
      }
    ]

    // Set state with user prompt and an empty message for the IA
    set(() => ({ messages: initialState }))

    try {
      // Send the prompt to the API
      const text = await sendPropmtToAPI({ prompt: message })

      // Update the last message (AI) with the response from the API
      set((state: State) => ({
        messages: state.messages.map((message: Message) => {
          if (message.id === (currentId + 1)) {
            return { ...message, text }
          }
          return message
        })
      }))
    } catch (error: any) {
      // Update the error state with the error message
      set(() => ({ error: error.message }))
    }
  }
}))
