// node.js testing
/* 
    build a thing as an object to be handled 
    by software, in this case a data structure 
    that represents what a thin is...
*/
// run this code with nodeJS `$ node thing.js`

import { getRandomCompliment } from "./utils.mjs";

// what is a thing?
/* 
    a thing is an instance of what a Thing is.
    it is an unique instance.
    has properties that describe it.
    may act based on its methods.
*/
// now we build Thing as a class
class Thing {
    constructor(name, color="orange") {
        this.name = name;
        this.color = color;
        this.id = Math.random()
            .toString(16)
            .substr(2);
        this.x = 0;
        this.y = 0;
        this.status = "happy";
        // and now let's solve the issue by binding
        // 'this' to this instance of the class
        this.fallAsleep = this.fallAsleep.bind(this);
        this.wakeUp = this.wakeUp.bind(this);
    };
    fallAsleep() {
        // if not already asleep...
        if (this.status != "asleep") {
            this.status = "asleep";
            console.log(`- I'm going to bed.\n${this.name} falls fast asleep.\n`);
            // what if we wake our thing up in a certain
            // amount of time?
            setTimeout(() => this.wakeUp(), Math.floor(Math.random() * 5000));
        }
    };
    wakeUp() {
        // if asleep...
        if (this.status == "asleep") {
            // 50% chance of waking up happy...
            this.status = Math.floor(Math.random() * 2) == 0
                ? "happy"
                : "sad"
            console.log(`${this.name} wakes up.\n- ${this.status == "happy" ? "Hello sunshine!" : "Oh, crap..."} -it says-.\n`);
        }
    };
};

// following code works because, even though there is no
// 'this' binding on the class functions, we are always
// calling them from the object.

// let's make it fail...

// now let's try to create several things
// for this we need some global object,
// we may create a property on it. On nodeJS
// 'this' will default to an emptyish global object.
// On browsers it will default to the window object.
global.things = [];
let names = ["homer", "marge", "bart", "lisa", "maggie"];
let colors = ["blue", "green", "orange", "yellow", "purple"];
for (let name of names) {
    let thing = new Thing(name, colors[
        Math.floor(Math.random() * colors.length)
    ]);
    global.things.push(thing);
}

// let's take them to bed and see...
for (let thing of global.things) {
    let putThingToSleep = thing.fallAsleep;
    // thing.fallAsleep();
    putThingToSleep();
}
