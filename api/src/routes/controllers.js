require("dotenv").config();
const { APIKEY } = process.env;
const { Videogame, Genre } = require("../db");
const axios = require("axios");

//////// Controllers VideoGames/////////////////

const getApiInfo = async () => {
  const arrayGames = [];
  for (let i = 1; i <= 10; i++) {
    const apiUrlGames = await axios.get(
      `https://api.rawg.io/api/games?key=${APIKEY}&page=${i}`
    );
    arrayGames.push(
      await apiUrlGames.data.results.map((e) => {
        return {
          id: e.id,
          name: e.name,
          description: e.description,
          releaseDate: e.released,
          rating: e.rating,
          platforms: e.platforms.map((e) => e.platform.name),
          image: e.background_image,
        };
      })
    );
  }
  return arrayGames.flat();
};

const getDbInfo = async () => {
  return await Videogame.findAll({
    include: {
      model: Genre,
      atributes: ["name"],
      through: {
        atributes: [],
      },
    },
  });
};

const getAllGames = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDbInfo();
  const totalInfo = apiInfo.concat(dbInfo);
  return totalInfo;
};

const createNewVideoGame = async (
  name,
  description,
  released,
  image,
  rating,
  platforms,
  genres
) => {
  await Videogame.create({
    name,
    description,
    released,
    image,
    rating,
    platforms,
    genres,
  });
};

const filterGameById = async (id) => {
  const findVideoGameFormat = [];
  if (id.length > 8) {
    const findVideoGameDb = await Videogame.findByPk(id, {
      include: [
        {
          model: Genre,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      ],
    });
    findVideoGameFormat.push({
      id: findVideoGameDb.id,
      name: findVideoGameDb.name,
      released: findVideoGameDb.released,
      genres: findVideoGameDb.genres.map((e) => e.name),
      platforms: findVideoGameDb.platforms.map((e) => e.platform.name),
      image: findVideoGameDb.background_image,
      rating: findVideoGameDb.rating,
      description: findVideoGameDb.description,
    });

    return findVideoGameFormat;
  } else {
    const infoApi = (
      await axios.get(`https://api.rawg.io/api/games/${id}?key=${APIKEY}`)
    ).data;
    console.log(infoApi);
    findVideoGameFormat.push({
      id: infoApi.id,
      image: infoApi.background_image,
      name: infoApi.name,
      genres: infoApi.genres.map((e) => e.name),
      platforms: infoApi.platforms.map((e) => e.platform.name),
      rating: infoApi.rating,
      description: infoApi.description,
      released: infoApi.released,
    });
  }
  return findVideoGameFormat;
};
/////////////Controllers Genres/////////////////

module.exports = {
  getApiInfo,
  getDbInfo,
  getAllGames,
  createNewVideoGame,
  filterGameById,
};
