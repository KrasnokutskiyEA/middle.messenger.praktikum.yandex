export function validateInput (input: HTMLElement): void {
  const isValid = input.validity.valid

  if (isValid === false) {
    input.nextSibling.classList.remove('hidden')
  } else {
    input.nextSibling.classList.add('hidden')
  }
}

export function validateForm (): void {
  const tgt = document.querySelectorAll('input')

  tgt.forEach((input: HTMLElement) => validateInput(input))
}
