const slider = document.querySelector('.slider')
const slides = slider.querySelectorAll('.slide')
const tools = document.querySelector('.tools')
const toolBtns = tools.querySelectorAll('span')

tools.addEventListener('click', (e) => {
  const { index } = e.target.dataset
  if (index) {
    slides.forEach((slide) => {
      const { turn } = slide.dataset
      if (turn == index) {
        slide.classList.add('active')
        const { width } = slide.getBoundingClientRect()
        slider.scrollTo({ left: width * index, behavior: 'smooth' })
      } else {
        slide.classList.remove('active')
      }
    })
    toolBtns.forEach((btn) => {
      if (btn.dataset.index === index) {
        btn.classList.add('active')
      } else {
        btn.classList.remove('active')
      }
    })
  }
})
