export const getRandomCompliment = () => {
    let compliments = ["gorgeous", "kind of weirdish", "awesome", "luxurious", "ridiculous", "amazing", "superb", "maybe sad (?)"];
    return compliments[Math.floor(Math.random() * compliments.length)];
}
