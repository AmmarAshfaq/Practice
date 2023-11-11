let show_magicians12 = (magicians) => {
  //Print the name of each magician in the list.
  for (const iterator of magicians) {
    console.log(iterator);
  }
};

let make_great1 = (magicians) => {
  //Add 'the Great!' to each magician's name.
  // Build a new list to hold the great musicians.
  let great_magicians = [];

  // Make each magician great, and add it to great_magicians.
  great_magicians = magicians.map((item) => `Great Magicians ${item}`);

  return great_magicians;
};

let magicians12 = ["Harry Houdini", "David Blaine", "Teller"];
show_magicians12(magicians12);

console.log("\nGreat magicians:");
let great_magicians = make_great1(magicians12);
show_magicians12(great_magicians);

console.log("\nOriginal magicians:");
show_magicians12(magicians12);
