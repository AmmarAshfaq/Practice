var guessList1 = ["Jhon", "Duke", "Herry"];
guessList1.forEach(function (element) {
    console.log("Hi ".concat(element, ", today is dinner at my home would you like to join?"));
});
console.log("".concat(guessList1[0], " can't make a dinner today"));
guessList1[0] = "Waseem";
guessList1.unshift("Jhon");
guessList1.splice(2, 0, "arbaz");
guessList1.push("umair");
guessList1.forEach(function (element) {
    console.log("Hi ".concat(element, ", today is dinner at my home would you like to join? i have found a very bigger dinner table for this"));
});
console.log("Sorry, we can only invite two people to dinner.");
var username = guessList1.pop();
console.log("Sorry,".concat(username, " there is no room in the table"));
username = guessList1.pop();
console.log("Sorry,".concat(username, " there is no room in the table"));
username = guessList1.pop();
console.log("Sorry,".concat(username, " there is no room in the table"));
username = guessList1.pop();
console.log("Sorry,".concat(username, " there is no room in the table"));
console.log(guessList1);
guessList1.forEach(function (element) {
    console.log("".concat(element, " please come to dinner"));
});
