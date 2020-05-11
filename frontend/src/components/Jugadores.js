import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Jugadores() {
  let valor = document.cookie.split("token=");
  const [cookie] = useState(valor[1]);
  const [jugadores, setjugadores] = useState([]);

  

  useEffect(() => {
    async function getJugadores() {
      const response = await axios.get(`http://localhost:4000/api/jugadores?secret_token=${cookie}`)
        setjugadores(response.data.jugadores)
    };
    getJugadores()
  },[cookie]);
  return (
    <div>
      <h1>Jugadores</h1>
      <div>{cookie}</div>
      <div>
        {jugadores.map(jugador =>(
           <h1 key={jugador.id}>{jugador.nombre}</h1>
        ))}
      </div>
    </div>
  );
}
