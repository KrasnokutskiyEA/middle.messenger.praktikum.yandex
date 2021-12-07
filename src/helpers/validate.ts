export default (event: Event): void => {
  const tgt = event.target
  const isValid = tgt.validity.valid

  if (isValid === false) {
    tgt.nextSibling.classList.remove('hidden')
  } else {
    tgt.nextSibling.classList.add('hidden')
  }
}
