const button = document.querySelector("button");
const container = document.querySelector(".container");

button.addEventListener("click", () => {
  const boxElement = document.createElement("div");
  boxElement.classList.add("box");
  container.append(boxElement);
  boxElement.addEventListener("click", () => {
    boxElement.remove();
  });
});

const h1 = document.createElement("h1");
