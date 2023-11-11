let person_name = "Muhammad ammar Ashfaq";

console.log(person_name.toLowerCase());
console.log(person_name.toUpperCase());

let titleCase = person_name
  .toLowerCase()
  .split(" ")
  .map((value: string) => value.replace(value[0], value[0].toUpperCase()))
  .join(" ");
console.log(titleCase);
