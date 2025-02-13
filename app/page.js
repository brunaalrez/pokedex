'use client'
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [pokemon, alteraPokemon] = useState([]);
  const [pesquisa, alteraPesquisa] = useState("");

  async function busca(){
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/pikachu");
    const data = response.data;
    console.log(data);
  }
  return (
    <div>
      <h1>Pokedex</h1>

      <p>Digite o nome de u Pokémon:</p>
      <input/>
      <br/>
      <button onClick={()=> busca()}>Pesquisar</button>

      <hr/>

      <h2>Nome</h2>
      <p><strong>ID: </strong>??</p>
      <img src=""/>
    </div>
  );
}
