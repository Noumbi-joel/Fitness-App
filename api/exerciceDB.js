import axios from "axios";
import { rapidApiKey } from "../constants";

const baseUrl = "https://exercicedb.p.rapidapi.com";

const apiiCall = async (url, params) => {
  try {
    const options = {
      method: "GET",
      url,
      params,
      headers: {
        "X-RapidAPI-Key": rapidApiKey,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };

    const response = await axios.request(options);
    return response.data;
  } catch (err) {
    console.log("error: ", err.message);
  }
};

export const fetchExercisesByBodyPart = async (bodyPart) => {
  let data = await apiiCall(baseUrl + "/exercises/bodyPart/" + bodyPart);
  return data;
};
