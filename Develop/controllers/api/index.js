const commentRoutes = require("./commentRoutes");
const postRoutes = require("./postRoutes");
const router = require("express").Router();
const userRoutes = require("./userRoutes");

router.use("/comment", commentRoutes);
router.use("/post", postRoutes);
router.use("/user", userRoutes);

module.exports = router;