let username2: string[] = ["junaid", "meraj", "shuban", "rehan", "admin"];

username2.forEach((element) => {
  if (element === "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${element}, thank you for logging in again.`);
  }
});
