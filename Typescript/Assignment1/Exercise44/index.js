var make_sandwich = function () {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    //Make a sandwich with the given items.
    console.log("\nI'll make you a great sandwich:");
    items.forEach(function (element) {
        console.log("  ...adding " + element + " to your sandwich.");
    });
    console.log("Your sandwich is ready!");
};
make_sandwich("roast beef", "cheddar cheese", "lettuce", "honey dijon");
make_sandwich("turkey", "apple slices", "honey mustard");
make_sandwich("peanut butter", "strawberry jam");
