import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css"


const CardsContainer = () => {
    const vGames = useSelector(state=>state.videoGames)
  return (
    <div className={style.container}>
      {vGames.map(e => {
        return <Card
        id={e.id}
        name={e.name}
        releaseDate={e.releaseDate}
        platforms={e.platforms}
        description={e.description}
        image={e.image}
        rating={e.rating}
        key={e.id}
         />;
      })}
    </div>
  );
};


export default CardsContainer