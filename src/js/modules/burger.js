export default function burger(burgerSelector, linksSelector, activeSelector) {
  const burger = document.querySelector(burgerSelector)

  burger.addEventListener('click', () => {
    document.documentElement.classList.toggle(activeSelector)
  })

  const navLinks = document.querySelectorAll(linksSelector)

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      document.documentElement.classList.remove(activeSelector)
    })
  })
}
