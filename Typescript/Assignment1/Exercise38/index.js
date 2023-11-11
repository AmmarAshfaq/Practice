var describe_city = function (city, country) {
    if (country === void 0) { country = "chile"; }
    var msg = city + " is in " + country + ".";
    console.log(msg);
};
describe_city("santiago");
describe_city("reykjavik", "iceland");
describe_city("punta arenas");
