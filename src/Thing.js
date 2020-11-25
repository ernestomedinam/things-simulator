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
// now we build Thing as a class
export class Thing {
  constructor(name, color = "orange") {
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
  }
  fallAsleep() {
    // if not already asleep...
    if (this.status != "asleep") {
      this.status = "asleep";
      console.log(`- I'm going to bed.\n${this.name} falls fast asleep.\n`);
      // what if we wake our thing up in a certain
      // amount of time?
      setTimeout(() => this.wakeUp(), Math.floor(Math.random() * 5000));
    }
  }
  wakeUp() {
    // if asleep...
    if (this.status == "asleep") {
      // 50% chance of waking up happy...
      this.status = Math.floor(Math.random() * 2) == 0 ? "happy" : "sad";
      console.log(
        `${this.name} wakes up.\n- ${
          this.status == "happy" ? "Hello sunshine!" : "Oh, crap..."
        } -it says-.\n`
      );
    }
  }
}
