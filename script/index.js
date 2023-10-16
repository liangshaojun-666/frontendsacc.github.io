const count = 80
const colors = ['gold', 'orange', 'chocolate', 'skyblue', 'darkcyan', 'green', 'turquoise']
for (let i = 0; i < count; i++) {
  const body = document.body
  const block = document.createElement('div')
  block.classList.add('block')
  const index = Math.floor(Math.random() * colors.length)
  block.style.background = `${colors[index]}`
  body.appendChild(block)
}
function GenCube () {
  anime({
    targets: '.block',
    translateX: () => anime.random(-900, 900),
    translateY: () => anime.random(-600, 600),
    scale: () => anime.random(1, 6)
  })
}
GenCube()
