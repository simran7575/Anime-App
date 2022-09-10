import axios from "axios";
export let API = axios.create({
  baseURL: `https://ghibliapi.herokuapp.com/films`,
});

export async function getApi(endPoint, headers = null, query = null) {
  const response = await API.get(`${endPoint}`, {
    headers: headers,
    params: query,
  });
  return response;
}

