import "./App.css";
import {Home,Landing,Detail,Create} from "./views"
import { Route , useLocation } from "react-router-dom";
import  NavBar  from "./components/NavBar/NavBar"



function App() {

  const location = useLocation();


  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Route exact path="/" component={Landing}/>
      <Route exact path="/videogames" component={Home} render ={()=> <Home />}/>
      <Route exact path="/videogames/:id" render ={()=> <Detail />}/>
      <Route exact path="/Create" render ={()=> <Create  />}/>

    </div>
  );
}

export default App;
