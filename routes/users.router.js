const { Router } = require("express");
const usersModel = require("../models/users.model");
const isAuth = require("../middlewares/isAuth.middleware");
const usersRouter = Router();

usersRouter.get("/me", isAuth, async (req, res) => {
  try {
    const user = await usersModel.findById(req.userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "მომხმარებელი ვერ მოიძებნა" });
    }

    res.json({
      message: "პროფილის მონაცემები წარმატებით წამოიღე",
      data: user,
    });
  } catch (error) {
    res.status(500).json({ message: "სერვერის შეცდომა" });
  }
});

usersRouter.delete("/me", isAuth, async (req, res) => {
  try {
    const deletedUser = await usersModel.findByIdAndDelete(req.userId);

    if (!deletedUser) {
      return res.status(404).json({ message: "მომხმარებელი ვერ მოიძებნა" });
    }

    res.json({
      message: "შენი ექაუნთი წარმატებით წაიშალა",
      data: deletedUser,
    });
  } catch (error) {
    res.status(500).json({ message: "სერვერის შეცდომა" });
  }
});

module.exports = usersRouter;
