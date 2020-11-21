// node.js testing
/* 
    build a thing as an object to be handled 
    by software, in this case a data structure 
    that represents what a thin is...
*/
// run this code with nodeJS `$ node thing.js`

// what is a thing?
/* 
    a thing is an instance of what a Thing is.
    it is an unique instance.
    has properties that describe it.
    may act based on its methods.
*/
function Thing(name, color = "orange") {
    // so a thing must have a name, definately.
    this.name = name;
    // also it's color, default is orange.
    this.color = color;
    // a name wouldn't make it unique, but we
    // could build a random string for that.
    this.id = Math.random()
    .toString(16)
    .substr(2);
    // a thing's position in space may be
    // described by its coordinates, refering to
    // top left corner of a box that contains it
    this.x = 0;
    this.y = 0;
    // and then we suppose it also has a status
    // ["asleep", "sad", "happy"]
    this.status = "happy";
    // thing has been 'constructed', let's return it
    return this;
}
// let's add some methods to our Thing prototype
Thing.prototype.fallAsleep = function() {
    // if not already asleep...
    if (this.status != "asleep") {
        this.status = "asleep";
        console.log(`\n- I'm going to bed.\n${this.name} falls fast asleep.`);
    }
};
Thing.prototype.wakeUp = function() {
    // if asleep...
    if (this.status == "asleep") {
        // 50% chance of waking up happy...
        this.status = Math.floor(Math.random() * 2) == 0
            ? "happy"
            : "sad"
        console.log(`\n${this.name} wakes up.\n- ${this.status == "happy" ? "Hello sunshine!" : "Oh, crap..."} -it says-.\n`);
    }
};

// now let's try to create a thing and console log it
let thing = new Thing("homer");
console.log(thing);

// let's try to take our thing to bed
thing.fallAsleep();

// let's wake it up!
thing.wakeUp();