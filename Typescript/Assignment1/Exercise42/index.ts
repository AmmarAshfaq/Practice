let magicians1 = ["Harry Houdini", "David Blaine", "Teller"];
let show_magicians1 = () => {
  console.log(magicians1);
};

let make_great = () => {
  magicians1 = magicians1.map((item) => `Great Magician ${item}`);
};

make_great();
show_magicians1();
