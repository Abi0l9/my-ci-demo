const app = require("../index");

describe("app is running", () => {
    test("verified", async () => {
        const res = await request(app).get("/");
        console.log(res);

        const status = res.status;

        expect(status).toBe(200);
    });
});
