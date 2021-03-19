const button = document.querySelector("button");
const container = document.querySelector(".container");
let confirmation;

button.addEventListener("click", () => {
  const boxElement = document.createElement("div");
  boxElement.classList.add("box");
  container.append(boxElement);
  boxElement.addEventListener("click", () => {
    confirmation = confirm("Do you really want to proceed?");
    if (confirmation === true) {
      boxElement.remove();
    } else {
      alert("Cancelled");
    }
  });
});
