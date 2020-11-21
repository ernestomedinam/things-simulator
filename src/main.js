/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./thing.css";
import "./assets/img/4geeks.ico";

import { createHomeView } from "./home";
import { createThing } from "./thing";

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
  }
};
