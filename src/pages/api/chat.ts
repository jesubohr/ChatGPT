// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  error?: string
  text?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') return res.status(405).end()

  const { prompt } = req.body
  if (!prompt) return res.status(400).json({ error: 'No prompt provided' })

  try {
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        prompt: `Answer as if you were the perfect conversational AI, ChatGPT. The user gives you a prompt and you must answer in a natural way. The prompt is:\n\n${prompt}`,
        model: 'text-davinci-003',
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0.5
      })
    })

    if (!response.ok) throw new Error(`OpenAI API responded with ${response.status} ${response.statusText}`)

    const { choices } = await response.json()
    return res.status(200).json({ text: choices[0].text.trim() })
  } catch (error: any) {
    console.error(error)
    return res.status(500).json({ error: `Internal server error. ${error.cause}` })
  }
}
