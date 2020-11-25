/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./thing.css";
import "./board.css";
import "./assets/img/4geeks.ico";

import { createHomeView } from "./home";
import { createThing } from "./things.js";
import { createDashboard, createBoard } from "./start";

document.onreadystatechange = function() {
  if (document.readyState == "interactive") {
    console.log("loading things...");
  } else if (document.readyState == "complete") {
    console.log("hello things!");
    createHomeView();
    let app = document.querySelector("#app");
    let thing = createThing();
    thing.classList.add("super");
    app.insertBefore(thing, app.children[1]);
    document.body.style.visibility = "visible";
    let button = document.createElement("button");
    button.innerHTML = "start";
    button.classList.add("button", "super", "action");
    button.type = "button";
    button.addEventListener("click", () => {
      document.body.style.backgroundColor = "lightgray";
      let app = document.querySelector("#app");
      app.innerHTML = "";
      let dashboard = createDashboard();
      app.appendChild(dashboard);
      let board = createBoard();
      app.appendChild(board);
      console.log("welcome, human. we are things.");
    });
    app.insertBefore(button, app.children[2]);
  }
};
