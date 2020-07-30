import axios from "axios";

export class GeolocationService {

    public async getCity(){
        const url = process.env.IP_API_URL ?? "";
        console.log(url);
        return axios.get(url).then((response) => {
            console.log(response);
            return response.data.city;
        })
        .catch((error) => {
            // handle error
            console.log(error);
          });
    }
}