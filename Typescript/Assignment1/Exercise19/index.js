var guessListss = ["Jhon", "Duke", "Herry"];
guessListss.forEach(function (element) {
    console.log("Hi ".concat(element, ", today is dinner at my home would you like to join?"));
});
console.log("".concat(guessListss[0], " can't make a dinner today"));
guessListss[0] = "Waseem";
guessListss.unshift("Jhon");
guessListss.splice(2, 0, "arbaz");
guessListss.push("umair");
guessListss.forEach(function (element) {
    console.log("Hi ".concat(element, ", today is dinner at my home would you like to join? i have found a very bigger dinner table for this"));
});
console.log("Total guest to be invited in the dinner is ".concat(guessListss.length));
