
import { getApi } from "./HttpClient";

//getting the full list of anime
export async function getAllAnimeList() {
 
  return await getApi("");
}

//getting the details of one anime using id
export async function getAnimeDetails(id) {
  const query = {
    id: id,
  };

  return await getApi("/user",null, query);
}

