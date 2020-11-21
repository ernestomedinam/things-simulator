/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/4geeks.ico";

import { createHomeView } from "./home";

document.onreadystatechange = function() {
  if (document.readyState == "interactive") {
    console.log("loading things...");
  } else if (document.readyState == "complete") {
    console.log("hello things!");
    createHomeView();
  }
};
