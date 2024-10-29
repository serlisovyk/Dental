export default function modal(modalSelector, triggerSelector, closeSelector) {
  const modal = document.querySelector(modalSelector)
  const modalTrigger = document.querySelector(triggerSelector)
  const modalCloseBtn = document.querySelector(closeSelector)

  modalTrigger.addEventListener('click', function () {
    modal.classList.add('show')
    modal.classList.remove('hide')
    document.body.style.overflow = 'hidden'
    document.documentElement.style.scrollbarGutter = 'stable'
  })

  function closeModal() {
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ''
    document.documentElement.style.scrollbarGutter = ''
  }

  modalCloseBtn.addEventListener('click', closeModal)

  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal()
  })

  document.addEventListener('keydown', e => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
      closeModal()
    }
  })
}
