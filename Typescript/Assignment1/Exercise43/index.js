var show_magicians12 = function (magicians) {
    //Print the name of each magician in the list.
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var iterator = magicians_1[_i];
        console.log(iterator);
    }
};
var make_great1 = function (magicians) {
    //Add 'the Great!' to each magician's name.
    // Build a new list to hold the great musicians.
    var great_magicians = [];
    // Make each magician great, and add it to great_magicians.
    great_magicians = magicians.map(function (item) { return "Great Magicians ".concat(item); });
    return great_magicians;
};
var magicians12 = ["Harry Houdini", "David Blaine", "Teller"];
show_magicians12(magicians12);
console.log("\nGreat magicians:");
var great_magicians = make_great1(magicians12);
show_magicians12(great_magicians);
console.log("\nOriginal magicians:");
show_magicians12(magicians12);
