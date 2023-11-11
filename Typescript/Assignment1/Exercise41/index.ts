let show_magicians = (magicians: string[]) => {
  //Print the name of each magician in the list
  for (const iterator of magicians) {
    console.log(iterator);
  }
};

let magicians: string[] = ["harry houdini", "david blaine", "teller"];
show_magicians(magicians);
