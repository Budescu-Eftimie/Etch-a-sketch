let gridContainer = document.getElementsByClassName("grid-container")[0];
let gridContainerWidth = 500;
let defaultSize = 10;
let slider = document.getElementById("myRange");
let output = document.getElementsByTagName("output")[0];


slider.oninput = (e) => {
  output.textContent = defaultSize = e.target.value;
};

slider.onchange = (e) => changeGrid();
gridContainer.onmouseover = (e) => {
  if (e.target.className === "square") e.target.style.background = rainbow();
};

function rainbow() {
  let red = Math.round(Math.random() * 256);
  let green = Math.round(Math.random() * 256);
  let blue = Math.round(Math.random() * 256);
  let rgb = `rgb(${red},${green},${blue})`;
  return rgb;
}

function makeGrid(size) {
  size = defaultSize;
  let cellWidth = gridContainerWidth / size;
  for (let i = 0; i < size * size; i++) {
    let gridDiv = document.createElement("div");
    gridDiv.style.width = `${cellWidth}px`;
    gridDiv.style.height = `${cellWidth}px`;
    gridDiv.className = "square";
    gridContainer.append(gridDiv);
  }
}

function changeGrid() {
  gridContainer.innerHTML = "";
  makeGrid();
}

makeGrid();
