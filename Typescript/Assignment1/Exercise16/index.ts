let guessListss = ["Jhon", "Duke", "Herry"];

guessListss.forEach((element) => {
  console.log(
    `Hi ${element}, today is dinner at my home would you like to join?`
  );
});

console.log(`${guessListss[0]} can't make a dinner today`);

guessListss[0] = "Waseem";

guessListss.unshift("Jhon");

guessListss.splice(2, 0, "arbaz");

guessListss.push("umair");

guessListss.forEach((element) => {
  console.log(
    `Hi ${element}, today is dinner at my home would you like to join? i have found a very bigger dinner table for this`
  );
});
