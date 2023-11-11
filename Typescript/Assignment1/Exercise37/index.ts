let make_shirt2 = (
  size: string = "large",
  message: string = "I love Typescript"
) => {
  // Summarize the shirt that's going to be made
  console.log(`I'm going to make a ${size}  t-shirt.`);
  console.log('It will say, "' + message + '"');
};
make_shirt2();
make_shirt("small", "Programmers are loopy.");
