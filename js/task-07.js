const input = document.querySelector("input");

const text = document.querySelector("span#text");

input.addEventListener("input", rangeChange);

function rangeChange(event) {
  text.style.fontSize = event.currentTarget.value + "px";
}
