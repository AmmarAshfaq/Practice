let make_shirt = (size: string, message: string) => {
  // Summarize the shirt that's going to be made
  console.log(`I'm going to make a ${size}  t-shirt.`);
  console.log('It will say, "' + message + '"');
};

make_shirt("large", "I love Typescript!");
make_shirt("Readability counts.", "medium");
