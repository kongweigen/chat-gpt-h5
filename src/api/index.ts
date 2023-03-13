import { request } from '../utils/index'

export const sendChatMsg = (messages: string) => {
  return Promise.resolve(
    request({
      url: 'https://api.openai.com/v1/chat/completions',
      method: 'POST',
      data: {
        model: 'gpt-3.5-turbo',
        messages
      }
    })
  )
}
