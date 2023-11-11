var city_country = function (city, country) {
    return city + ", " + country;
};
var city = city_country("santiago", "chile");
console.log(city);
city = city_country("ushuaia", "argentina");
console.log(city);
city = city_country("longyearbyen", "svalbard");
console.log(city);
