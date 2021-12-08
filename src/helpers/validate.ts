export default (event: Event): void => {
  const tgt = event.target
  const isValid = tgt.validity.valid

  console.log('----tgt.validity=', tgt.validity)
  if (isValid === false) {
    tgt.nextSibling.classList.remove('hidden')
  } else {
    tgt.nextSibling.classList.add('hidden')
  }
}
