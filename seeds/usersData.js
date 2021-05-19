const { Users } = require("../models");

const gallerydata = [
  {
    userName: "Boune",
    password: "ijklmnop",
  },
  {
    userName: "Fisher",
    password: "91011121",
  },
  {
    userName: "Jackson",
    password: "abcdefgh",
  },
  {
    userName: "Culbertson",
    password: "12345678",
  },
];

const usersGallery = () => Gallery.bulkCreate(usersdata);

module.exports = usersGallery;
