import {
  clearInputs,
  postData,
  changeStatusMessage,
  resetBorders,
} from '../utils/utils.js'
import { POST_URL } from '../utils/constants.js'

export default function form(formSelector, inputsSelector, textareaSelector) {
  const form = document.querySelector(formSelector)
  const inputs = document.querySelectorAll(inputsSelector)

  if (!form) {
    console.warn(`Форма с селектором ${formSelector} не найдена на этой странице.`)
    return
  }

  form.addEventListener('submit', handleSubmit)

  function handleSubmit(e) {
    e.preventDefault()

    const formData = new FormData(form)

    if (!validateInputs()) return

    postData(POST_URL, formData, form)
      .then(() => changeStatusMessage('fullfield', form))
      .catch(() => changeStatusMessage('rejected', form))
      .finally(() => {
        clearInputs(inputsSelector, textareaSelector)
        setTimeout(() => changeStatusMessage('clear', form), 5000)
      })
  }

  function validateInputs() {
    let valid = true

    if (!inputs[0].value || !inputs[1].value) {
      inputs[0].style.border = '1px solid red'
      inputs[1].style.border = '1px solid red'
      changeStatusMessage('The first two fields <br /> must be filled in', form)
      valid = false
    }

    if (valid) resetBorders(inputs)

    return valid
  }
}
