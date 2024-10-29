export function clearInputs(inputsSelector, textareaSelector) {
  const inputs = document.querySelectorAll(inputsSelector)
  const textarea = document.querySelector(textareaSelector)

  inputs.forEach(input => (input.value = ''))

  if (textarea) textarea.value = ''

  resetBorders(inputs)
}

export function resetBorders(inputs) {
  inputs.forEach(input => (input.style.border = ''))
}

export async function postData(url, data, form) {
  changeStatusMessage('pending', form)

  try {
    let res = await fetch(url, {
      method: 'POST',
      body: data,
    })

    if (!res.ok) throw new Error('Network response was not ok')

    return await res.text()
  } catch (error) {
    console.error('Error during post request:', error)
    throw error
  }
}

export function changeStatusMessage(state, form) {
  const status = form.querySelector('.status')

  if (!status) return

  switch (state) {
    case 'pending':
      status.innerHTML = 'Loading...'
      break
    case 'fullfield':
      status.innerHTML = 'Success! We will call you soon :)'
      break
    case 'rejected':
      status.innerHTML = 'Something went wrong :('
      break
    case 'clear':
      status.innerHTML = ''
      break
    default:
      status.innerHTML = state
      break
  }
}
