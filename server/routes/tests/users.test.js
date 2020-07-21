const esmImport = require('esm')(module);
const express = require("express");
const request = require("supertest");
const route = esmImport('../users');

const mockGetUser = jest.fn().mockResolvedValue(mockUser);
const mockCreateUser = jest.fn();

const mockUser = {
    id: '123',
    email: 'test@test.com',
    name: 'test',
}

jest.mock('../../services', () => ({
    UserRepo: {
        getUser: mockGetUser,
        createUser: mockCreateUser,
    }
}));

const app = express();
        
route(app);

describe("userRouter", () => {
    describe("GET /:userId", () => {
        it("should return user details if the user exists", () => {
            await request(app).get('/user:123')
                .expect('Content-Type', /json/)
                .expect(200, {
                    ...mockUser,
                }, done);
        });
    });
});