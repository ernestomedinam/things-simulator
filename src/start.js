const createButton = (name, classNames) => {
  let button = document.createElement("button");
  button.classList.add("button", ...classNames);
  button.textContent = name;
  if (name == "spawn") {
    button.addEventListener("click", handleSpawn);
  }
  return button;
};

const handleSpawn = event => {
  console.log("requested to spawn a thing (?)");
};

export const createDashboard = () => {
  let dashboard = document.createElement("div");
  dashboard.classList.add("dashboard");
  dashboard.innerHTML = "<div class='inputs' />";
  dashboard.innerHTML += "<div class='buttons' />";
  dashboard.innerHTML += "<div class='info' />";
  let input = document.createElement("input");
  input.placeholder = "inputs...";
  dashboard.children[0].appendChild(input);
  let spawn = createButton("spawn", ["action", "super"]);
  dashboard.children[1].appendChild(spawn);
  return dashboard;
};

export const createBoard = () => {
  window.variables = {
    board: {
      step: "5px",
      height: "720px",
      width: "960px"
    },
    things: []
  };
  let board = document.createElement("div");
  board.style.width = window.variables.board.width;
  board.style.height = window.variables.board.height;
  board.classList.add("board");
  return board;
};
