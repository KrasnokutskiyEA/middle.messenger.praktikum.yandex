import { showMessage } from '../helpers/showComponents'
import router from '../router'

export default function handleError (error: unknown): void {
  const e = error as XMLHttpRequest
  !e.response && router.go('/500')

  const { reason } = JSON.parse(e.response)
  showMessage(reason, ['message-error'])
}
