
const request = require("supertest");
const app = require("../../app"); 

const getToken = async () => {
    const res = await request(app)
        .post("/api/auth/login")
        .send({ email: "test@example.com", password: "123456" });

    return res.body.token; // Adjust if your response is different
};

module.exports = getToken;
