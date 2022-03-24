function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line
console.log(Bird.prototype.constructor);
console.log(Dog.prototype.constructor);
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;
console.log(Bird.prototype.constructor);
console.log(Dog.prototype.constructor);

let duck = new Bird();
let beagle = new Dog();