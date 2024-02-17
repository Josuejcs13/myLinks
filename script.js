const button = document.querySelector("#switch")
button.addEventListener("click", mode)

function mode() {
  const html = document.querySelector("html")
  html.classList.toggle("light")
}
