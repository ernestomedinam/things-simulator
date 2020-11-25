export const getRandomCompliment = () => {
  let compliments = [
    "gorgeous",
    "kind of weirdish",
    "awesome",
    "luxurious",
    "ridiculous",
    "amazing",
    "superb",
    "maybe sad (?)"
  ];
  return compliments[Math.floor(Math.random() * compliments.length)];
};

export const getRandomColor = (asString = true, opacity = 1) => {
  let r = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  if (asString) {
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  } else {
    return { r, b, g, opacity };
  }
};
