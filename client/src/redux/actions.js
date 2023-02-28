import axios from "axios";

export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";

export const GET_VIDEOGAME_ID = "GET_ID_VIDEOGAME";

export const GET_VIDEOGAME_NAME = "GET_VIDEOGAME_NAME";

export const getAllGames = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/videogames");
    const videoGames = apiData.data;
    dispatch({ type: GET_ALL_VIDEOGAMES, payload: videoGames });
  };
};

export const getGameById = (id) => {
  return async function (dispatch) {
    const apiData = await axios.get(`http://localhost:3001/videogames/${id}`);
    console.log(apiData);
    const videoGame = apiData.data;
    dispatch({ type: GET_VIDEOGAME_ID, payload: videoGame });
  };
};

export const getGameByName = (name) => {
  return async function (dispatch) {
    const apiData = await axios.get(`http://localhost:3001/videogames?name=${name}`);
    const videoGame = apiData.data;
    dispatch({ type: GET_VIDEOGAME_NAME, payload: videoGame });
  };
};
