let make_car = (
  manufacturer: string,
  model: string,
  ...options: { [key: string]: any }[]
): { manufacturer: string; model: string; options: { [key: string]: any } } => {
  let car_dict = {
    manufacturer: manufacturer,
    model: model,
    options: {},
  };
  for (const option of options) {
    for (const key in option) {
      car_dict.options[key] = option[key];
    }
  }

  return car_dict;
};

let my_outback = make_car(
  "subaru",
  "outback",
  { color: "blue" },
  { tow_package: true }
);
console.log(my_outback);

let my_accord = make_car(
  "honda",
  "accord",
  { year: 1991 },
  { color: "white" },
  { headlights: "popup" }
);
console.log(my_accord);
