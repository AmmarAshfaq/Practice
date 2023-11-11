var make_car = function (manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car_dict = {
        manufacturer: manufacturer,
        model: model,
        options: {},
    };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        for (var key in option) {
            car_dict.options[key] = option[key];
        }
    }
    return car_dict;
};
var my_outback = make_car("subaru", "outback", { color: "blue" }, { tow_package: true });
console.log(my_outback);
var my_accord = make_car("honda", "accord", { year: 1991 }, { color: "white" }, { headlights: "popup" });
console.log(my_accord);
