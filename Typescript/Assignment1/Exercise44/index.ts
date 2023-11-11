let make_sandwich = (...items) => {
  //Make a sandwich with the given items.
  console.log("\nI'll make you a great sandwich:");
  items.forEach((element) => {
    console.log("  ...adding " + element + " to your sandwich.");
  });
  console.log("Your sandwich is ready!");
};

make_sandwich("roast beef", "cheddar cheese", "lettuce", "honey dijon");
make_sandwich("turkey", "apple slices", "honey mustard");
make_sandwich("peanut butter", "strawberry jam");
