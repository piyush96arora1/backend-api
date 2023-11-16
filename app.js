const express = require("express");
const app = express();
const port = 3000; // You can change this to the desired port number

function generateRandomNumber() {
  // Generate a random number between 10000 and 99999
  const randomNumber = Math.floor(Math.random() * 90000) + 10000;
  return randomNumber;
}

// Example usage
const random5DigitNumber = generateRandomNumber();
console.log(random5DigitNumber);

app.get("/random", (req, res) => {
  // Generate a random number between 0 and 1
  const randomNumber = Math.floor(Math.random() * 2);
  const weburl = req.query.weburl;
  if (weburl === "/jobs-in-delhi-cty") {
    res.setHeader("x-key", "2241");
  }
  if (weburl === "/jobs-in-noida-cty") {
    res.setHeader("x-key", "2242");
  }
  // Set the "x-random" header in the response
  res.setHeader("x-random", randomNumber);
  res.setHeader("x-deviceid-cookie", "deviceId=7778921-31123; path=/");
  res.setHeader("x-isustSaved-cookie", "isUstSaved=true; path=/");
  res.setHeader("x-utmsource-cookie", "utm_source=google; path=/");
  res.setHeader("x-utmmedium-cookie", "utm_medium=organic; path=/");
  res.json({ result: randomNumber });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
