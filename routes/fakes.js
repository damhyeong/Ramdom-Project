const express = require("express");
const router = express.Router();

router.use(express.json());

const {makeUser, makeUsers} = require("../controller/FakeController");

router.get(
    "/users",
    makeUser
);

router.post(
    "/users",
    makeUsers
)

module.exports = router;