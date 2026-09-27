const express = require("express");

const authRouter = require("./auth/auth.router");
const cors = require("cors");
const usersRouter = require("./routes/users.router");
const connectToMongo = require("./db/connectToMongo");
const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();
connectToMongo();

app.use("/users", usersRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.json({ message: "წარმატებით დარესფონსდა" });
});

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
