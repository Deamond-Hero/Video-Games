const { Router } = require("express");
const { createVideoGame } = require("./handlers");

const postRouter = Router();

postRouter.post("/videogames", createVideoGame);

module.exports = postRouter;
