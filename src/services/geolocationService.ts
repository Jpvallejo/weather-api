import axios from "axios";

export class GeolocationService {

    public getLatLon() {
        const url = process.env.IP_API_URL ?? "";
        return axios.get(url).then((response) => {
            return {
                lat: response.data.lat,
                lon: response.data.lon
            };
        })
        .catch((error) => {
            // handle error
            console.log(error);
            throw error;
          });
    }

    public getCityLatLon(city: String) {
        const url = `${process.env.GEOCODING_API_URL}address=${city}&key=${process.env.GEOCODING_API_KEY}`;
        return axios.get(url).then((response) => {
            return {
                lat: response.data.results[0].geometry.location.lat,
                lon: response.data.results[0].geometry.location.lng
            };
        })
        .catch((error) => {
            // handle error
            console.log(error);
            throw error;
          });
    }

    public async getCity(): Promise<string>{
        const url = process.env.IP_API_URL ?? "";
        return axios.get(url).then((response) => {
            return response.data.city;
        })
        .catch((error) => {
            // handle error
            console.log(error);
            throw error;
          });
    }
}