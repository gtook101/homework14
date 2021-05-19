const { blogs } = require("../models");

const blogsData = [
  {
    title: "Virualization",
    id: 1,
    description: "Allows one computer to operate under two operating systems.",
  },
  {
    title: "JavaScript",
    id: 2,
    description:
      "JavaScript has many online resources use to educate individuals how to code.",
  },
  {
    title: "Github",
    id: 3,
    description:
      "Allows users to create projects to be accessed to the public.",
  },
  {
    title: "Apps",
    id: 4,
    description:
      "Are useful tools used by many to keep track of various activities to be completed throughout the year.",
  },
];

const blogs = () => Blog.bulkCreate(blogsData);

module.exports = blogs;
