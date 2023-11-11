let guessList1 = ["Jhon", "Duke", "Herry"];

guessList1.forEach((element) => {
  console.log(
    `Hi ${element}, today is dinner at my home would you like to join?`
  );
});

console.log(`${guessList1[0]} can't make a dinner today`);

guessList1[0] = "Waseem";

guessList1.unshift("Jhon");

guessList1.splice(2, 0, "arbaz");

guessList1.push("umair");

guessList1.forEach((element) => {
  console.log(
    `Hi ${element}, today is dinner at my home would you like to join? i have found a very bigger dinner table for this`
  );
});

console.log("Sorry, we can only invite two people to dinner.");
let username = guessList1.pop();
console.log(`Sorry,${username} there is no room in the table`);

username = guessList1.pop();
console.log(`Sorry,${username} there is no room in the table`);

username = guessList1.pop();
console.log(`Sorry,${username} there is no room in the table`);

username = guessList1.pop();
console.log(`Sorry,${username} there is no room in the table`);

console.log(guessList1);

guessList1.forEach((element) => {
  console.log(`${element} please come to dinner`);
});
