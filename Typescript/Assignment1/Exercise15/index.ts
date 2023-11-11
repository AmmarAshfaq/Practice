let guessLists = ["Jhon", "Duke", "Herry"];

guessLists.forEach((element) => {
  console.log(
    `Hi ${element}, today is dinner on my home would you like to join?`
  );
});

console.log(`${guessLists[0]} can't make a dinner today`);

guessLists[0] = "Waseem";

guessLists.forEach((element) => {
  console.log(
    `Hi ${element}, today is dinner on my home would you like to join?`
  );
});
