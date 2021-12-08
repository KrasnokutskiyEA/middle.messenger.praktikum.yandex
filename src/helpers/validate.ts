export function validateInput (input: HTMLElement): void {
  const isValid = input.validity.valid

  if (isValid === false) {
    input.nextSibling.classList.remove('hidden')
  } else {
    input.nextSibling.classList.add('hidden')
  }
}

export function validateForm (): void {
  const input = document.querySelectorAll('input')

  input.forEach((i: HTMLElement) => validateInput(i))
}

function serializeForm (formNode: HTMLFormElement): FormData {
  return new FormData(formNode)
}

export function submitForm (event: Event): void {
  // 1- prevent form default behaviour
  event.preventDefault()

  // 2 - gather inputs data
  const data = serializeForm(event.target)
  console.log('form data=', Object.fromEntries(data.entries()))
}
