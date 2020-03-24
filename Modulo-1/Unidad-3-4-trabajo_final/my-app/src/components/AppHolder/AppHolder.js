import React from 'react';
//import React,{useEffect,useState} 'react
//import axios from 'axios';
import './AppHolder.scss';
import ProfileSaction from '../../pages/ProfileSection'

const profilesObj = {
  profiles:[
     {
        id: 1,
        title: "Rick Sanchez",
        description: "Ceintífico, shy pooper",
        frases: ["Ser amable es algo que hace la gente bgraa.. estúpida para mejorar sus opciones...", "...el punto de tener mascotas es la sensación de sentir superioridad como especie..."],
        teléfono: 5551320657,
        email: "ricksanches@gmail.com",
        dirección: "Calle 123 ",
        ciudad: "Adult Swim city",
        imagen: "rick.jpg"
     },
     {
        id: 2,
        title: "Morty Smith",
        description: "Estudiante, ayudante de Rick",
        frases: ["No lo sé Rick..", "Jessicaa 🧡🧡🧡🧡"],
        teléfono: 51321657893,
        email: "mortysmith@gmail.com",
        dirección: "Calle 123 ",
        ciudad: "Adult Swim city",
        imagen: "morty.png"
     }
  ]
}

console.log(profilesObj.profiles)

const AppHolder = () => {
   //const [data, setData] = useState({ profiles: [] });

  /*useEffect(() => {
    async function getProfiles(){
      const result = await axios(
        'http://localhost:8001/api/profiles',
      );
      setData(result.data);
    }
    getProfiles()
  }, []);*/

    return (
            <ProfileSaction profiles={profilesObj.profiles}/>
    )
}

export default AppHolder
