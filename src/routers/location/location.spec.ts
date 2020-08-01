import { app } from "../../index";
import { GeolocationService } from "../../services/geolocationService";

var request = require('supertest');
jest.mock('../../services/geolocationService', () => {
    return {
        GeolocationService: jest.fn().mockImplementation(() => {
        return {
            getCity: () => "Barcelona",
        };
      })
    };
  });
describe('loading express', function () {
    let server: any;
    beforeEach(function () {
        server = app.listen(7000, () => {
            console.log(`Listening on port ${7000}`);
        });
    });
    afterEach(function () {
        server.close();
    });
    it('returns city on calling /location', function testSlash(done) {
        request(server)
            .get('/v1/location')
         .expect(200)
         .then((response: any) =>{
             console.log(response.body);
            expect(response.body.city).toBe("Barcelona");
            done();
         });
    });
});