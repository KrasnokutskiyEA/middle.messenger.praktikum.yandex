import { showMessage } from '../helpers/showComponents'
import router from '../router'

export default function handleError (error: unknown): void {
  const e = error as XMLHttpRequest
  !e.response && router.go('/500')

  const { reason } = JSON.parse(e.response)
  const message = reason === 'Cookie is not valid' ? 'Please, Sign In' : reason
  showMessage(message, ['message-error'])
}
