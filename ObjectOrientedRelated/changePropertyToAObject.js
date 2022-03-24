function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    // Only change code below this line
    Constructor: Dog,
    numLegs: 4,
    eat: function () {
        return "nom";
    },
    describe: function () {
        return "My name is " + this.name + ".";
    }

};