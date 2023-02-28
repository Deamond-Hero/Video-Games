import style from "./Card.module.css"

const Card = (props) => {
  return <div className={style.card}>
    <p>Name:{props.name}</p>
    <p>id:{props.id}</p>
    <p>image{props.image}</p>
    <p>releaseDate:{props.releaseDate}</p>
    <p>description:{props.description}</p>
    <p>rating:{props.rating}</p>

  </div>;
};



export default Card;
