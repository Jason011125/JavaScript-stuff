let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};
let glideMixin = function (obj) {
    obj.glide = function () {
        console.log("glide");
    }
}
glideMixin(bird);
glideMixin(boat);
  // Only change code below this line