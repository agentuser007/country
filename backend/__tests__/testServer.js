// Unit test for server.js

const request = require('supertest');
const app = require('../server');
const baseURL = "http://localhost:8080";


describe("Testing server", () => {

    test("should return 200 if server is running", async () => {
        await request(baseURL).get('/').expect(200).then((response) => {
            expect(response.text).toBe("Server is running");
        });
    });

    test("should return country data", async () => {
        const response = await request(baseURL).get(`/country/eesti`);
        expect(response.status).toBe(200);
        expect(JSON.stringify(response.body).includes("Estonia")).toBe(true);
    });

    test("should return 404 if route not found", async () => {
        const response = await request(baseURL).get(`/country/usaa`);
        expect(response.status).toBe(404);
    });

});


