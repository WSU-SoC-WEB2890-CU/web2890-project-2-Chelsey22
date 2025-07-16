//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"
const previewModal = document.getElementById("previewModal")
const previewImg = document.getElementById("previewImg")

previewModal.addEventListener("show.bs.modal", (event) => {
  const trigger = event.relatedTarget
  const imgSrc = trigger.getAttribute("data-img")
  previewImg.src = imgSrc
})
