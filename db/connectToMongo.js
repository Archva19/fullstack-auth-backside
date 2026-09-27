const { default: mongoose } = require("mongoose");

async function connectToMongo() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("დაკავშირდა წარმატებით");
  } catch (error) {
    console.log(error, "ეს ერორი მოდის მუნგუსის ქონექთიდან");
  }
}

module.exports = connectToMongo;
