import { request } from '../utils/index'

export const sendChatMsg = (content: string) => {
  return Promise.resolve(
    request({
      url: '/v1/chat/completions',
      method: 'POST',
      data: {
        model: 'text-davinci-003',
        messages: [
          {
            role: 'user',
            content
          }
        ]
      }
    })
  )
}
