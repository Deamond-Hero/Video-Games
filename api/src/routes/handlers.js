const express = require("express")
const{getDbInfo, getApiInfo, getAllGames, createNewVideoGame,filterGameById} = require("./controllers");
const {Videogame ,Genre} = require ("../db")
const axios = require ("axios")
require('dotenv').config();
const {APIKEY} = process.env; 



const filterVideoGameByName = async (req,res)=>{
    const name = req.query.name;
    let videoGameTotal = await getAllGames();
        if (name){
        let videoGameName = await (videoGameTotal.filter(e => e.name.toLowerCase().includes(name.toLowerCase()))).slice(0,15)
        
        videoGameName.length ?
        res.status(200).send(videoGameName) :
        res.status(404).send("El videojuego no se encontró")
    }else {
        res.status(200).send(videoGameTotal)
    }
    
}




const filterVideoGameByGenre = async(req, res)=>{
    const apiUrlGenres = await axios.get(`https://api.rawg.io/api/genres?key=${APIKEY}`);
    const genres = await apiUrlGenres.data.results.map(e => e.name)
    genres.forEach(e => {
        Genre.findOrCreate({
            where: {name : e}
        })
    })
    const AllGeneres = await Genre.findAll();
    res.send(AllGeneres)
}


const filterVideoGameById = async (req,res) => {
    const  id  = req.params.id;
    try{
        const videoGame = await filterGameById(id);
        res.status(200).send(videoGame);
    }catch{     
        res.status(404).json('No se encontro el Videojuego')
    }
}



//////////////////////////////Post Routers///////////////////////////////////////


const createVideoGame = async(req,res)=>{
    const {name , description , released , image ,rating, platforms, genres} = req.body
    const newVideoGame = await new createNewVideoGame 
    (name , description , released , image ,rating, platforms, genres)
try{    
    res.status(200).send(newVideoGame)
}catch{
    res.status(400).json('El videojuego no pudo ser Creado')
}
}


// const genres = async (req,res)=>{

// }



// GET /videogames:
// Obtener un listado de los videojuegos
// Debe devolver solo los datos necesarios para la ruta principal

// GET /videogames?name="...":
// Obtener un listado de las primeros 15 videojuegos que contengan la palabra ingresada como query parameter
// Si no existe ningún videojuego mostrar un mensaje adecuado

// GET /videogame/{idVideogame}:
// Obtener el detalle de un videojuego en particular
// Debe traer solo los datos pedidos en la ruta de detalle de videojuego
// Incluir los géneros asociados

// POST /videogames:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body
// Crea un videojuego en la base de datos, relacionado a sus géneros.

// GET /genres:
// Obtener todos los tipos de géneros de videojuegos posibles
// En una primera instancia deberán traerlos desde rawg y guardarlos en su propia base de datos y luego ya utilizarlos desde allí

module.exports={
filterVideoGameByName,
filterVideoGameByGenre,
filterVideoGameById,
createVideoGame,

}