export async function sendPropmtToAPI({ prompt }: { prompt: string }): Promise<string> {
  let response = ''
  try {
    // Send the prompt to the API
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt })
    })
    const data = await res.json()
    response = data.text
  } catch (error: any) {
    // Update the error state with the error message
    throw new Error(error)
  }
  return response
}
