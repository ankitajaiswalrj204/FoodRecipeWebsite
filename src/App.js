import React,{useState,useEffect} from "react";
import './App.css';
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Axios from "axios";

function App() {

  const [search,setSearch]=useState("");
  const [recipes,setRecipe]=useState([]);

  let app_id='d8feb9b1';
  let app_key='cd9cb2390f98fe12e951f5df71d0b41e';

  useEffect(()=>{getRecipe();},[]);
   const onInputChange=(e)=>{
      setSearch(e.target.value);
  }
  
  const getRecipe= async()=>{
    const result=await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${app_id}&app_key=${app_key}`);
    console.log(result)
    setRecipe(result.data.hits);

  }

  const onSearchClick=()=>{
    getRecipe();
  }

    return (
    <div className="App">
      <Header search={search}  onInputChange={onInputChange} onSearchClick={onSearchClick}/>
      <div className="container">
        <div className="cards">
          <Recipes recipes={recipes}></Recipes>
        </div>
      </div>
    </div>
  );
}

export default App;
