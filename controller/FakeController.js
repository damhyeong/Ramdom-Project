const {faker} = require("@faker-js/faker");

const makeUser = (req, res) => {

    const result = {
        email : faker.internet.email(),
        password : faker.internet.password(),
        fullName : faker.person.fullName(),
        contact : faker.phone.number()
    }

    return res.status(200).json(result);
}

const makeUsers = (req, res) => {
    const {howMany} = req.body;

    if(typeof howMany === "number"){
        const returnArr = [];

        for(let i = 0; i < howMany; i++){
            returnArr.push({
                email : faker.internet.email(),
                password : faker.internet.password(),
                fullName : faker.person.fullName(),
                contact : faker.phone.number()
            })
        }

        return res.status(200).json(returnArr);
    } else {
        return res.status(400).json({
            message: "howMany 변수에 숫자를 잘 입력 해 주세요."
        })
    }

}

module.exports = {makeUser, makeUsers};