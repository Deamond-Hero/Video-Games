const { Router } = require("express");
const {
  filterVideoGameByName,
  filterVideoGameByGenre,
  filterVideoGameById,
} = require("./handlers");

const getRouter = Router();

// getRouter.get('videogame', filterVideoGameByName)

getRouter.get("/videogames", filterVideoGameByName);

getRouter.get("/genres", filterVideoGameByGenre);

getRouter.get("/videogames/:id", filterVideoGameById);

module.exports = {
  getRouter,
};
