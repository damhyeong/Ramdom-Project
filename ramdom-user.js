const {faker} = require("@faker-js/faker");

const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());

const fakeRouter = require("./routes/fakes");

app.use("/fake", fakeRouter);

app.listen(process.env.PORT, () => {
    console.log(`현재 ${process.env.PORT} 에서 실행 중`);
});