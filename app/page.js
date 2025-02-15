'use client'
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [pokemon, alteraPokemon] = useState([]);
  const [pesquisa, alteraPesquisa] = useState("");

  const [erroPesquisa, alteraErro] = useState(false);

  async function busca(){
    try{
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon/" +pesquisa);

      const data = response.data;
      alteraPokemon([data]);
      alteraErro(false);
    }catch(e){
      alteraErro(true);
    }
  }

  async function buscaTodos(){
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/")
    const data = response.data.results;
    alteraPokemon(data);
  }

  useEffect(()=>{
    buscaTodos();
  },[])
  return (
    <div>
      <h1>Pokedex</h1>

      <p>Digite o nome de u Pokémon:</p>
      <input onChange={(e)=> alteraPesquisa(e.target.value)}/>
      <br/>
      <button onClick={()=> busca()}>Pesquisar</button>

      {erroPesquisa == true && <p className="text-red-500">Erro ao pesquisa</p>}

      <hr/>
      {
        pokemon == 0 ?
          <p>Carregando...</p>
        :
          pokemon.map((i, index) =>
            <div>
              <h2>{i.name}</h2>
              <p><strong>ID: </strong>{i.id ? i.id : index+1}</p>
              <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/"+(i.id ? i.id : index + 1)+".gif"}/>
            </div>
          )
         
         
      }

      
    </div>
  );
}
