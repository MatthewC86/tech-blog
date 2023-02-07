const { User } = require("../models");

const userData =

[
    {
      username: "Matthewc86",
      email: "cnymhw86@gmail.com",
      password: "password12345"
    },
    {
      username: "Anybody877",
      email: "Any@email.com",
      password: "password12345"
    }
  ]

  const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;