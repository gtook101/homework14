const User = require("./User");
const Gallery = require("./Blogs");

User.hasMany(Blogs, {
  foreignKey: "blogs_id",
});

module.exports = { User, Blogs };
