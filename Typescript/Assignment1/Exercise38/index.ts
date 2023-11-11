let describe_city = (city, country = "chile") => {
  let msg = city + " is in " + country + ".";
  console.log(msg);
};

describe_city("santiago");
describe_city("reykjavik", "iceland");
describe_city("punta arenas");
