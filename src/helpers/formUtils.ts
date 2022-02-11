// validate single input
export function validateInput (input: EventTarget): void {
  const isValid = input.validity.valid

  if (isValid === false) {
    input.nextSibling.classList.remove('hidden')
  } else {
    input.nextSibling.classList.add('hidden')
  }
}

// validate whole form (all inputs at once)
export function validateForm (): void {
  const input = document.querySelectorAll('input')

  input.forEach((i: HTMLElement) => validateInput(i))
}

function serializeForm (formNode: HTMLFormElement): FormData {
  return new FormData(formNode)
}

export function submitForm (event: Event): Record<string, unknown> {
  // 1- prevent form default behaviour
  event.preventDefault()

  // 2 - gather inputs data
  const data = serializeForm(event.target as HTMLFormElement)
  console.log('form data=', Object.fromEntries(data.entries()))
  return Object.fromEntries(data.entries())
}

export function clearInput (event: Event): void {
  event.target!.firstElementChild.lastElementChild.value = ''
}
