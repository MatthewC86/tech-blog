const { Comment } = require("../models");

const commentData = 
[
    {
      comment_info: "Billy Talent is one of the most underrated bands of all time",
      user_id: 2,
      post_id:1
    },
    {
      comment_info: "PC gaming is superior to console.",
      user_id: 3,
      post_id:2
    }
  ]

  const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;