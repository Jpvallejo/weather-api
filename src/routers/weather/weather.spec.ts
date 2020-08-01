import { app } from "../../index";

var request = require('supertest');

const forecastMockResponse = [
    {
        "date": "1970-01-19T11:25:04.800Z",
        "sunrise": "1970-01-19T11:24:41.473Z",
        "sunset": "1970-01-19T11:25:31.716Z",
        "temp": {
            "day": 300.97,
            "min": 292.71,
            "max": 302.14,
            "night": 295.61,
            "eve": 301.79,
            "morn": 292.71
        },
        "feels_like": {
            "day": 301.7,
            "night": 295.27,
            "eve": 304.04,
            "morn": 293.56
        },
        "pressure": 1015,
        "humidity": 55,
        "dew_point": 291.28,
        "wind_speed": 2.91,
        "wind_deg": 13,
        "weather": [
            {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
            }
        ]
    },
    {
        "date": "1970-01-19T11:26:31.200Z",
        "sunrise": "1970-01-19T11:26:07.921Z",
        "sunset": "1970-01-19T11:26:58.061Z",
        "temp": {
            "day": 301.65,
            "min": 293.22,
            "max": 302.61,
            "night": 293.22,
            "eve": 299.88,
            "morn": 293.56
        },
        "feels_like": {
            "day": 300.41,
            "night": 292.44,
            "eve": 299.25,
            "morn": 293.18
        },
        "pressure": 1014,
        "humidity": 50,
        "dew_point": 290.28,
        "wind_speed": 5.2,
        "wind_deg": 352,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ]
    },
    {
        "date": "1970-01-19T11:27:57.600Z",
        "sunrise": "1970-01-19T11:27:34.369Z",
        "sunset": "1970-01-19T11:28:24.404Z",
        "temp": {
            "day": 300.13,
            "min": 290.62,
            "max": 301.61,
            "night": 291.16,
            "eve": 299.11,
            "morn": 290.62
        },
        "feels_like": {
            "day": 298.5,
            "night": 291.25,
            "eve": 298.02,
            "morn": 290.68
        },
        "pressure": 1017,
        "humidity": 45,
        "dew_point": 287.46,
        "wind_speed": 4.14,
        "wind_deg": 357,
        "weather": [
            {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02d"
            }
        ]
    },
    {
        "date": "1970-01-19T11:29:24.000Z",
        "sunrise": "1970-01-19T11:29:00.817Z",
        "sunset": "1970-01-19T11:29:50.747Z",
        "temp": {
            "day": 299.77,
            "min": 289.12,
            "max": 301.94,
            "night": 292.9,
            "eve": 300.19,
            "morn": 289.12
        },
        "feels_like": {
            "day": 299.56,
            "night": 291.73,
            "eve": 300.01,
            "morn": 289.25
        },
        "pressure": 1018,
        "humidity": 46,
        "dew_point": 287.46,
        "wind_speed": 2.12,
        "wind_deg": 61,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ]
    }
];

const currentMockWeather = {
    "date": "1970-01-19T11:24:24.302Z",
    "sunrise": "1970-01-19T11:24:17.194Z",
    "sunset": "1970-01-19T11:25:08.918Z",
    "main": "Clouds",
    "description": "few clouds",
    "icon": "02d",
    "temp": 300.58,
    "feels_like": 301.63,
    "temp_min": 297.15,
    "temp_max": 302.04,
    "pressure": 1015,
    "humidity": 60,
    "visibility": 10000,
    "wind": {
        "speed": 3.1,
        "deg": 330
    }
};

const forecastSpecificMockResponse = [
    {
        "date": "1970-01-19T11:25:04.800Z",
        "sunrise": "1970-01-19T11:24:41.473Z",
        "sunset": "1970-01-19T11:25:31.716Z",
        "temp": {
            "day": 0,
            "min": 0,
            "max": 0,
            "night": 295.61,
            "eve": 301.79,
            "morn": 292.71
        },
        "feels_like": {
            "day": 301.7,
            "night": 295.27,
            "eve": 304.04,
            "morn": 293.56
        },
        "pressure": 1015,
        "humidity": 55,
        "dew_point": 291.28,
        "wind_speed": 2.91,
        "wind_deg": 13,
        "weather": [
            {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
            }
        ]
    },
    {
        "date": "1970-01-19T11:26:31.200Z",
        "sunrise": "1970-01-19T11:26:07.921Z",
        "sunset": "1970-01-19T11:26:58.061Z",
        "temp": {
            "day": 301.65,
            "min": 293.22,
            "max": 302.61,
            "night": 293.22,
            "eve": 299.88,
            "morn": 293.56
        },
        "feels_like": {
            "day": 300.41,
            "night": 292.44,
            "eve": 299.25,
            "morn": 293.18
        },
        "pressure": 1014,
        "humidity": 50,
        "dew_point": 290.28,
        "wind_speed": 5.2,
        "wind_deg": 352,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ]
    },
    {
        "date": "1970-01-19T11:27:57.600Z",
        "sunrise": "1970-01-19T11:27:34.369Z",
        "sunset": "1970-01-19T11:28:24.404Z",
        "temp": {
            "day": 300.13,
            "min": 290.62,
            "max": 301.61,
            "night": 291.16,
            "eve": 299.11,
            "morn": 290.62
        },
        "feels_like": {
            "day": 298.5,
            "night": 291.25,
            "eve": 298.02,
            "morn": 290.68
        },
        "pressure": 1017,
        "humidity": 45,
        "dew_point": 287.46,
        "wind_speed": 4.14,
        "wind_deg": 357,
        "weather": [
            {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02d"
            }
        ]
    },
    {
        "date": "1970-01-19T11:29:24.000Z",
        "sunrise": "1970-01-19T11:29:00.817Z",
        "sunset": "1970-01-19T11:29:50.747Z",
        "temp": {
            "day": 299.77,
            "min": 289.12,
            "max": 301.94,
            "night": 292.9,
            "eve": 300.19,
            "morn": 289.12
        },
        "feels_like": {
            "day": 299.56,
            "night": 291.73,
            "eve": 300.01,
            "morn": 289.25
        },
        "pressure": 1018,
        "humidity": 46,
        "dew_point": 287.46,
        "wind_speed": 2.12,
        "wind_deg": 61,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ]
    }
];

const currentSpecificMockWeather = {
    "date": "1970-01-19T11:24:24.302Z",
    "sunrise": "1970-01-19T11:24:17.194Z",
    "sunset": "1970-01-19T11:25:08.918Z",
    "main": "Clouds",
    "description": "few clouds",
    "icon": "02d",
    "temp": 0,
    "feels_like": 0,
    "temp_min": 0,
    "temp_max": 302.04,
    "pressure": 1015,
    "humidity": 60,
    "visibility": 10000,
    "wind": {
        "speed": 3.1,
        "deg": 330
    }
};
jest.mock('../../services/geolocationService', () => {
    return {
        GeolocationService: jest.fn().mockImplementation(() => {
            return {
                getCity: () => "Buenos Aires",
                getLatLon: () => {
                    return { "lat": 0, "lon": 1 }
                },
                getCityLatLon: (city: string) => {
                    return { "lat": 1, "lon": 1 }
                },
            };
        })
    };
});
jest.mock('../../services/weatherService', () => {
    return {
        WeatherService: jest.fn().mockImplementation(() => {
            return {
                getCurrentWeather: (city: String) => {
                    return city == "Barcelona" ?
                        currentSpecificMockWeather :
                        currentMockWeather
                },
                getForecastWeather: (lat: number, lon: number) => {
                    return lat == 1 && lon == 1 ?
                        forecastSpecificMockResponse :
                        forecastMockResponse
                },
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
    it('returns currentWeather on calling /current', function testSlash(done) {
        request(server)
            .get('/v1/current')
            .expect(200)
            .then((response: any) => {
                expect(response.body).toEqual(currentMockWeather);
                done();
            });
    });

    it('returns forecastWeather on calling /forecast', function testSlash(done) {
        request(server)
            .get('/v1/forecast')
            .expect(200)
            .then((response: any) => {
                expect(response.body).toEqual(forecastMockResponse);
                done();
            });
    });

    it('returns currentSpecificWeather on calling /current/Barcelona', function testSlash(done) {
        request(server)
            .get('/v1/current/Barcelona')
            .expect(200)
            .then((response: any) => {
                expect(response.body).toEqual(currentSpecificMockWeather);
                done();
            });
    });

    it('returns forecastSpecificWeather on calling /forecast/Barcelona', function testSlash(done) {
        request(server)
            .get('/v1/forecast/Barcelona')
            .expect(200)
            .then((response: any) => {
                expect(response.body).toEqual(forecastSpecificMockResponse);
                done();
            });
    });
});