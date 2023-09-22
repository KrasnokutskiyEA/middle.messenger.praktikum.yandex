import store from '../store'

// toggle error visibility
function toggleError (isValid: boolean, input: HTMLInputElement): void {
  const errorMsgElement = input.nextSibling

  if (errorMsgElement instanceof HTMLElement) {
    !isValid
      ? errorMsgElement.classList.remove('hidden')
      : errorMsgElement.classList.add('hidden')
  }
}

// validate single input
export function validateInput (input: HTMLInputElement): void {
  const isValid = input.validity.valid
  toggleError(isValid, input)
}

// validate new password input
export function validateNewPassword (evt: Event): void {
  const confirmNewPassField = evt.target

  if (confirmNewPassField instanceof HTMLInputElement) {
    const newPassField = document.querySelector('#new_password')

    if (newPassField instanceof HTMLInputElement) {
      const isValid = newPassField.value === confirmNewPassField.value

      !isValid
        ? confirmNewPassField.setCustomValidity('Passwords do not match')
        : confirmNewPassField.setCustomValidity('')

      toggleError(isValid, confirmNewPassField)
    }
  }
}

// validate whole form (all inputs at once)
export function validateForm (): void {
  const input = document.querySelectorAll('input:not(#avatar)')

  input.forEach((i: any) => { validateInput(i) })
}

function serializeForm (formNode: HTMLFormElement): FormData {
  return new FormData(formNode)
}

export function submitForm (event: Event): Record<string, any> {
  // 1- prevent form default behaviour
  event.preventDefault()

  // 2 - gather inputs data
  const form = event.target

  if (form instanceof HTMLFormElement) {
    const data = serializeForm(form)
    return Object.fromEntries(data.entries())
  }
  return {}
}

export function clearInput (evt: Event): void {
  const form = evt.target
  if (form instanceof HTMLElement) {
    const input = form.querySelector('#message')

    if (input instanceof HTMLInputElement) {
      input.value = ''
    }
  }
}

export function findChatById (id: string): Nullable<Record<string, any>> {
  return store.getState().chats.find((chat: Record<string, any>) => chat.id === Number(id))
}

export function findChat (event: Event): Nullable<Record<string, any>> {
  const chatCard = event
    .composedPath()
    .find(el => (el instanceof HTMLElement) && (el.className === 'chat-card'))

  if (chatCard instanceof HTMLElement) {
    const chatId = chatCard.attributes.getNamedItem('chat-id')

    if (chatId) {
      return findChatById(chatId.value)
    }
  }
}
