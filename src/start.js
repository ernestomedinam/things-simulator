import { createThing } from "./things";
import { Thing } from "./Thing";
import { getRandomColor } from "./utils";

const refreshSimulator = () => {
  let board = document.querySelector(".board");
  board.innerHTML = "";
  for (let thing of window.variables.things) {
    let htmlThing = createThing(thing.color, thing.name);
    htmlThing.id = thing.id;
    htmlThing.style.position = "absolute";
    htmlThing.style.left = `${thing.x}px`;
    htmlThing.style.top = `${thing.y}px`;
    board.appendChild(htmlThing);
  }
};

const createButton = (name, classNames) => {
  let button = document.createElement("button");
  button.classList.add("button", ...classNames);
  button.textContent = name;
  if (name == "spawn") {
    button.addEventListener("click", e => {
      handleSpawn(e);
      refreshSimulator();
    });
  } else if (name == "sim spawn") {
    button.addEventListener("click", async e => {
      await handleSimulateSpawn(e);
      refreshSimulator();
    });
  }
  return button;
};

const handleSimulateSpawn = async event => {
  // get ahold of the input to see if there is
  // a valid number of times for the simulation
  let input = document.querySelector("input");
  let times = 0;
  console.log(parseInt(input.value));
  if (input.value != "" && !isNaN(parseInt(input.value))) {
    times = parseInt(input.value);
  } else {
    do {
      times = parseInt(
        window
          .prompt("How many random spawns would you like to simulate?")
          .trim()
      );
    } while (isNaN(times) || times == 0);
  }
  if (times > 6000) {
    times = 6000;
  }
  for (let time = 0; time < times; time++) {
    // spawn a thing with a random color and a name
    await handleSpawn(event, `random thing #${time}`, getRandomColor());
  }
  return true;
};

const handleSpawn = (event, name = "", color = "") => {
  console.log("requested to spawn a thing (?)");
  // validate if there is a thing name written in the input
  // when the button was clicked
  let input = document.querySelector("input");
  // if there is we use that name, otherwise we ask for it
  // changing this to if statement instead of conditional expresion
  if (name == "") {
    if (input.value != "") {
      name = input.value;
    } else {
      do {
        name = window.prompt("what's the thing's name?").trim();
      } while (name == "");
    }
  }
  // clean the input either way
  input.value = "";
  // ask for its color...
  // and also changing this to add possibility of receiving a color
  if (color == "") {
    do {
      color = window.prompt("what's its color?").trim();
    } while (color == "");
  }
  // grab the board
  let board = document.querySelector(".board");
  // let's create a thing! creating a thing means
  // to build an instance from the Thing class
  let newThing = new Thing(name, color);
  // now let's randomize its position
  newThing.x = Math.floor(Math.random() * (board.offsetWidth - 80));
  newThing.y = Math.floor(Math.random() * (board.offsetHeight - 80));
  // now let's add it to the window object, which
  // is in this case treated as the global object
  // when we used the node environment.
  window.variables = {
    ...window.variables,
    things: [...window.variables.things, newThing]
  };
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
  let simulateSpawn = createButton("sim spawn", ["primary", "super"]);
  dashboard.children[1].appendChild(simulateSpawn);
  return dashboard;
};

export const createBoard = () => {
  window.variables = {
    board: {
      step: "5px",
      height: "608px",
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
