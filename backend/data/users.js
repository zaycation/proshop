import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Isaiah Thomas",
    email: "isaiah@scoutgurus.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Tyler McNeil",
    email: "tdmcneil@yahoo.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
