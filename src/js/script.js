import burger from './modules/burger.js'
import modal from './modules/modal.js'
import slider from './modules/slider.js'
import form from './modules/form.js'

window.addEventListener('DOMContentLoaded', () => {
  burger('.burger', '.nav__link', 'nav-open')

  modal('.modal', '[data-modal-open]', '[data-modal-close]', 'show', 'hide')

  slider(
    '.reviews__slides',
    '.reviews__slides-inner',
    '.reviews__content',
    '.reviews__prev',
    '.reviews__next'
  )

  form('.feedback__form', '.feedback__input')

  form('.connect__form', '.connect__input', '.connect__textarea')
})
