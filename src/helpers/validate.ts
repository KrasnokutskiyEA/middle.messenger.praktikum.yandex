export default (event: Event, validationTarget): void => {
  const isFormValid = event.target?.form.checkValidity()

  if (isFormValid === false) {
    validationTarget.setDisabled(true)
  } else {
    validationTarget.setDisabled(false)
  }
}
