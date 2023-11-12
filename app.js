const express = require("express");
const app = express();
const port = 3000; // You can change this to the desired port number

app.get("/random", (req, res) => {
  // Generate a random number between 0 and 1
  const randomNumber = Math.floor(Math.random() * 2);

  // Set the "x-random" header in the response
  res.setHeader("x-random", randomNumber);
  res.setHeader("x-deviceId-cookie", "deviceId=7778921-31123");
  res.setHeader("x-isUstSaved-cookie", true);
  res.json({ result: randomNumber });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
