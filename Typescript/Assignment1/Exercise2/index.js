var person_name = "Muhammad ammar Ashfaq";
console.log(person_name.toLowerCase());
console.log(person_name.toUpperCase());
var titleCase = person_name
    .toLowerCase()
    .split(" ")
    .map(function (value) { return value.replace(value[0], value[0].toUpperCase()); })
    .join("");
console.log(titleCase);
