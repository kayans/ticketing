import request from "supertest";
import { app } from "../../app";

it('responds with details about the current user', async () => {
    const cookie = await global.signin();
    
    if (cookie) {
        const response = await request(app)
            .get('/api/users/currentuser')
            .set('Cookie', cookie)
            .send()
            .expect(200);

        console.log(response.body);
        console.log(cookie);
        expect(response.body.currentUser.email).toEqual('test@test.com');
    } else {
        fail('Sign up did not provide a cookie');
    }
});

it('responds with null if not authenticated', async () => {
  const response = await request(app)
    .get('/api/users/currentuser')
    .send()
    .expect(200);

  expect(response.body.currentUser).toEqual(null);
});