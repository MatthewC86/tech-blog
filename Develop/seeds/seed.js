const seedUsers = require("./user");
const seedPosts = require("./post");
const seedComments = require("./comment");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("Success!");
  await seedUsers();
  console.log("Success!");

  await seedPosts();
  console.log("Success!");

  await seedComments();
  console.log("Success!");
  process.exit(0);
};

seedAll();