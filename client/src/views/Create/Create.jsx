import { useState } from "react";
import axios from "axios";

const Create = () => {

  const [form, setForm] = useState({
    name: "",
    description: "",
    releaseDate: "",
    rating: ""
  });

  const changeHandler = (event) => {
    const property = event.taget.name;
    const value = event.target.value;
    console.log("quiero hacer un cambio");
    axios.post("/videogames",form)
    .then(res=> alert(res))

    setForm({...form,[property]:value})
  };

  return (
    <form>
      <div>
        <label>Name: </label>
        <input type="text" value={form.name} onChange={changeHandler} name="name"/>
      </div>
      {/* <div>
        <label>Description: </label>
        <input
          type="text"
          value={form.description}
          onChange={changeHandler}
          name="description"
        />
      </div>
      <div>
        <label>Release Date: </label>
        <input
          type="text"
          value={form.releaseDate}
          onChange={changeHandler}
          name="RealeaseDate"
        />
      </div>
      <div>
        <label>Rating: </label>
        <input
          type="text"
          value={form.rating}
          onChange={changeHandler}
          name="rating"
        />
      </div> */}
    </form>
  );
};

export default Create;
