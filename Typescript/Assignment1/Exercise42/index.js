var magicians1 = ["Harry Houdini", "David Blaine", "Teller"];
var show_magicians1 = function () {
    console.log(magicians1);
};
var make_great = function () {
    magicians1 = magicians1.map(function (item) { return "Great Magician ".concat(item); });
};
make_great();
show_magicians1();
