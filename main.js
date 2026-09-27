const express = require("express");
const ConnectToMongo = require("../server/db/connectToMongo");
const authRouter = require("./auth/auth.router");
const cors = require("cors");
const usersRouter = require("./routes/users.router");
const app = express();
const PORT = 3030;
app.use(cors());
app.use(express.json());
require("dotenv").config();
ConnectToMongo();

app.use("/users", usersRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.json({ message: "წარმატებით დარესფონსდა" });
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
