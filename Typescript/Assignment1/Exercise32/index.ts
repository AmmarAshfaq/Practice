let current_users: string[] = [
  "Rehan",
  "Firdous",
  "Subhan",
  "Michael",
  "Ammar",
];

let new_users: string[] = ["Osama", "Asaid", "Ai", "Adnan", "Ammar"];

new_users.forEach((element) => {
  if (current_users.includes(element)) {
    console.log(`${element} is already taken please choose another name`);
  } else {
    console.log(`${element} is available`);
  }
});
