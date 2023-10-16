const btn = document.querySelector(".spinBtn")
const wheel = document.querySelector(".wheel")
let value = Math.ceil(Math.random() * 10000)
btn.onclick = function () {
  wheel.style.transform = "rotate(" + value + "deg)"
  value = Math.ceil(Math.random() * 3600)

}