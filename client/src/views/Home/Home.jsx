import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllGames, getGameById ,getGameByName } from "../../redux/actions";

const Home = () => {

   const dispatch = useDispatch();

    useEffect(()=>{
      console.log("se mandan todos los juegos")
        return dispatch(getAllGames());
    })

    // useEffect(()=>{
    //     dispatch(getGameByName());
    // },[dispatch])

    useEffect(()=>{
        dispatch(getGameById());
    },[dispatch])


  return (
    <>
      <h1>Home Videogames </h1>
      <CardsContainer/>
    </>
  );
};

export default Home;
