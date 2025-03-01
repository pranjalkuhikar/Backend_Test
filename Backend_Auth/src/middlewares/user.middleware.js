import { body } from "express-validator";

const validateUser = [
  body("username")
    .isString()
    .withMessage("username must be string")
    .isLength({ min: 3, max: 15 })
    .withMessage("Username must be at least 5 characters long")
    .custom((value) => value === value.toLowerCase())
    .withMessage("Username must be lowercase"),
  body("email").isEmail().withMessage("Email must be valid"),
  body("password")
    .isString()
    .withMessage("Password must be a string")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
];

export { validateUser };
