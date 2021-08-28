const button = document.querySelector(".btn");
const all = document.querySelector(".all");
const img = document.querySelector(".project-img");
const star = document.querySelector(".star");
function handleclick() {
  console.log("우와 클릭했다");
}
button.addEventListener("click", handleclick);

button.onclick = () => console.log("100");

function allclick() {
  if (img.style.display == "none") {
    img.style.display = "flex";
  } else {
    img.style.display = "none";
  }
}

all.addEventListener("click", allclick);
