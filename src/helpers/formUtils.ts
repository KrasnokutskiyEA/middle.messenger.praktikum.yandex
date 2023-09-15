import store from '../store'

// toggle error visibility
function toggleError (isValid: boolean, input: HTMLInputElement): void {
  !isValid
    ? input.nextSibling!.classList.remove('hidden')
    : input.nextSibling!.classList.add('hidden')
}

// validate single input
export function validateInput (input: HTMLInputElement): void {
  const isValid = input.validity.valid
  toggleError(isValid, input)
}

// validate new password input
export function validateNewPassword (input: HTMLInputElement): void {
  const newPass = document.querySelector('#new_password')
  const isValid = newPass!.value === input.value

  !isValid
    ? input.setCustomValidity('Passwords do not match')
    : input.setCustomValidity('')

  toggleError(isValid, input)
}

// validate whole form (all inputs at once)
export function validateForm (): void {
  const input = document.querySelectorAll('input:not(#avatar)')

  input.forEach((i: any) => validateInput(i))
}

function serializeForm (formNode: HTMLFormElement): FormData {
  return new FormData(formNode)
}

export function submitForm (event: Event): Record<string, any> {
  // 1- prevent form default behaviour
  event.preventDefault()

  // 2 - gather inputs data
  const data = serializeForm(event.target as HTMLFormElement)
  return Object.fromEntries(data.entries())
}

export function clearInput (input: HTMLInputElement): void {
  input.firstElementChild!.lastElementChild!.value = ''
}

export function findChatById (id: string): Record<string, any> | undefined {
  return store.getState().chats.find((chat: Record<string, any>) => chat.id === Number(id))
}

export function findChat (event: Event): Record<string, any> | undefined {
  const chatCard = event.composedPath().find(c => c.className === 'chat-card')
  const chatId = chatCard?.attributes['chat-id'].value
  return findChatById(chatId)
}
