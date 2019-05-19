const container = document.querySelector(".container");

// Creating the grids
for (let i = 0; i < 16; i++) {
  const colGrid = document.createElement("div");
  //rowGrid.textContent = "Col: " + i;
  for (let j = 0; j < 16; j++) {
    const rowGrid = document.createElement("div");
    rowGrid.classList.toggle("square");
    rowGrid.textContent = "Row: " + j;
    colGrid.appendChild(rowGrid);
  }
  container.append(colGrid);
}
