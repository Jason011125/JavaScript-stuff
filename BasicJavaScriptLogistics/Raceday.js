/*** creates a project that gives the registration number and the race time; 
 * 
 */
//randomize a race number
let raceNumber = Math.floor(Math.random() * 1000);
//record the registration and age
const registerEarly = true;
const runnerAge = 18;
//if age > 18, see if registered. 
if (runnerAge > 18 && registerEarly == true) {
    //registered and adult, add 1000 to their race number and log to console.
    raceNumber += 1000;
    console.log(`Early adults runs at 9:30 am, your race Number is ${raceNumber}`);

} else if (runnerAge > 18) {//if adult and not registered, log to console their race time and number
    console.log(`Later adults run at 11:00 am, your race number is ${raceNumber}`);
} else if (runnerAge < 18) {//if smaller than 18 yo, race time is 1230 regardless, print out race number
    console.log(`Youth registrants run at 12:30 pm (regardless of registration), your race number is ${raceNumber}`);
} else {
    //at the exact age of 18, exception
    console.log("see registration desk");
}
