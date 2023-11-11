let locations = ["himalaya", "andes", "tierra del fuego", "labrador", "guam"];

console.log("original order");
console.log(locations);

console.log("alphabetical order");
let sortedOrder = Array.from(locations);
console.log(sortedOrder.sort());

console.log("original order");
console.log(locations);

console.log("reverse order");
let reverseOrder = Array.from(locations);
console.log(reverseOrder.reverse());

console.log("original order");
console.log(locations);

console.log("reverse orignal array");
console.log(locations.reverse());

console.log("back to orignal array");
console.log(locations.reverse());

console.log("sort original array");
console.log(locations.sort());

console.log("sort in reverse order for original array");
console.log(
  locations.sort((a, b) => {
    if (a > b) {
      return 1;
    }
    return 0;
  })
);
