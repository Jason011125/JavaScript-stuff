let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+[0-9]*$|[a-z][\d][\d]+$/i; // check whether the username start with 2 letters or start with 1 letter and followed by number.
let result = userCheck.test(username);