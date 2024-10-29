import {
  clearInputs,
  postData,
  changeStatusMessage,
  resetBorders,
} from '../utils/utils.js'
import { POST_URL } from '../utils/constants.js'

export default function form(formSelector, inputsSelector, textareaSelector) {
  const forms = document.querySelectorAll(formSelector)

  forms.forEach(form => form.addEventListener('submit', handleSubmit))

  function handleSubmit(e) {
    e.preventDefault()

    const inputs = e.target.querySelectorAll(inputsSelector)

    const formData = new FormData(e.target)

    if (!validateInputs(inputs, e.target)) return

    postData(POST_URL, formData, e.target)
      .then(() => changeStatusMessage('fullfield', e.target))
      .catch(() => changeStatusMessage('rejected', e.target))
      .finally(() => {
        clearInputs(inputsSelector, textareaSelector)
        setTimeout(() => changeStatusMessage('clear', e.target), 5000)
      })
  }

  function validateInputs(inputs, targetForm) {
    let valid = true

    if (!inputs[0].value || !inputs[1].value) {
      inputs[0].style.border = '1px solid red'
      inputs[1].style.border = '1px solid red'
      changeStatusMessage(
        'The first two fields <br /> must be filled in',
        targetForm
      )
      valid = false
    }

    if (valid) resetBorders(inputs)

    return valid
  }
}
