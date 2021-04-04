'use strict';

const { app } = require('../src/server.js');
const supergoose = require('@code-fellows/supergoose');
const request = supergoose(app);

describe('Router.js routes', () => {
    it('Should POST to /signup to create a new user', async () => {
        const newUser = {
            username: 'baha',
            password: '1234',
        };
        const response = await request.post('/api/v1/signup').send(newUser);
        expect(response.status).toEqual(201);
        expect(response.body.username).toEqual('baha');
    });

    it('Should POST to /signin to login as a user (use basic auth)', async () => {
        const newUser = {
            username: 'baha',
            password: '1234',
        };
        const response = await request.post('/signup').send(newUser);
        const { username, password } = response.body;
        const record = await request
            .post('/api/v1/signin')
            .set(
                'Authorization',
                'basic ' +
                new Buffer(
                    `${newUser.username}:${newUser.password}`,
                    `utf8`
                ).toString('base64')
            );

        expect(record.status).toEqual(200);
    });
});
