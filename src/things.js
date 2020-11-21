export const createThing = (color = "", name = "") => {
  // create the thing as a div class 'thing'
  let thing = document.createElement("div");
  thing.classList.add("thing");
  // if it has a name, let's add a tooltip
  if (name != "") {
    let tooltip = document.createElement("span");
    tooltip.classList.add("tooltip");
    tooltip.textContent = name;
    thing.appendChild(tooltip);
  }
  // if it has a color, then it's set, otherwise
  // it's default class backgroundColor
  if (color != "") {
    thing.style.backgroundColor = color;
  }
  // a basic thing has eyes
  let eyes = document.createElement("div");
  eyes.classList.add("eyes");
  thing.appendChild(eyes);
  // eyes are left and right
  let left = document.createElement("div");
  left.classList.add("left");
  // each side has an eye that may be open
  // and has a pupil
  left.innerHTML = "<div class='open'><div class='pupil'></div></div>";
  eyes.appendChild(left);
  // same thing for right side of eyes zone
  let right = document.createElement("div");
  right.classList.add("right");
  right.innerHTML = "<div class='open'><div class='pupil'></div></div>";
  eyes.appendChild(right);
  // a basic thing has a mouth
  let mouth = document.createElement("div");
  mouth.classList.add("mouth");
  // this mouth may be smiling
  mouth.innerHTML = "<div class='smile' />";
  thing.appendChild(mouth);
  // thing has been created, returning
  // the html element
  return thing;
};
