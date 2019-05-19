const container = document.querySelector(".container");

// Creating the grids
for (let i = 0; i < 16; i++) {
  const colGrid = document.createElement("div");
  for (let j = 0; j < 16; j++) {
    const rowGrid = document.createElement("div");
    rowGrid.classList.toggle("square");
    colGrid.appendChild(rowGrid);
  }
  container.append(colGrid);
}

const squares = document.querySelectorAll(".square");

squares.forEach(sq => sq.addEventListener("mouseover", function(e) {
    sq.setAttribute("style", "background: black");
  })
);
