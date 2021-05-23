const users = require("./users");
const blogs = require("./blogs");

users.hasMany(blogs, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

blogs.belongsTo(users, {
  foreignKey: "user_id",
});

module.exports = { users, blogs };
