const express = require("express");
const app = express();
const port = 3000; // You can change this to the desired port number

app.get("/random", (req, res) => {
  // Generate a random number between 0 and 1
  const randomNumber = Math.floor(Math.random() * 2);

  res.json({ result: randomNumber });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
