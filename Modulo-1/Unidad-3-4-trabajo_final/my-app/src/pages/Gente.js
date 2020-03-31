import React,{ useState,useEffect } from 'react';
import ProfileSection from '../components/ProfileSection/ProfileSection'
//import axios from 'axios';

const PERFILES = {

    profiles:[
       {
          id: 1,
          siguiendo:false,
          title: "Rick Sanchez",
          description: "Ceintífico, shy pooper",
          twits: ["Bloba bloba dop dop!", "...pensé que todo el punto de tener un perro era sentirse superior.."],
          teléfono: 5551320657,
          email: "ricksanches@gmail.com",
          dirección: "Calle 123 ",
          ciudad: "Adult Swim city",
          imagen: "rick.jpg"
       },
       {
          id: 2,
          siguiendo:false,
          title: "Morty Smith",
          description: "Estudiante, ayudante de Rick",
          twits: ["No lo sé Rick..", "Jessicaa 🧡🧡🧡🧡"],
          teléfono: 51321657893,
          email: "mortysmith@gmail.com",
          dirección: "Calle 123 ",
          ciudad: "Adult Swim city",
          imagen: "morty.png"
       },
       {
          id: 3,
          siguiendo:false,
          title: "Summer Smith",
          description: "Estudiante, hermana de Morty",
          twits: ["alguna frase de summer", "alguna frase de summer"],
          teléfono: 51321657893,
          email: "summersmith@gmail.com",
          dirección: "Calle 123 ",
          ciudad: "Adult Swim city",
          imagen: "summer.jpg"
       },
       {
          id: 4,
          siguiendo:false,
          title: "Beth Sanchez",
          description: "Cirujana de Caballos",
          twits: ["alguna frase de Beth", "alguna frase de Beth"],
          teléfono: 51321657893,
          email: "bethsanchez@gmail.com",
          dirección: "Calle 123 ",
          ciudad: "Adult Swim city",
          imagen: "beth.jpeg"
       },
       {
          id: 5,
          siguiendo:false,
          title: "Jerry Smith",
          description: "perdedooooooor...💨🍂🍂 ",
          twits: ["alguna frase de Beth", "alguna frase de Beth"],
          teléfono: 51321657893,
          email: "jerrysmith@gmail.com",
          dirección: "Calle 123 ",
          ciudad: "Adult Swim city",
          imagen: "Jerry.png"
       },
       {
          id: 6,
          siguiendo:false,
          title: "Mr. Poopybutthole",
          description: "Soy yo!",
          twits: ["alguna frase de Beth", "alguna frase de Beth"],
          teléfono: 51321657893,
          email: "popopants@gmail.com",
          dirección: "Calle 123 ",
          ciudad: "Adult Swim city",
          imagen: "popo.jpg"
       }
     ]
  }


const Gente = () => {

    /**
       const [data, setData] = useState({ profiles: [] });

         useEffect(() => {
            async function getProfiles(){
               const result = await axios(
               'http://localhost:8001/api/profiles',
               );
               setData(result.data);
            }
            getProfiles()
         }, []);
     */
    const [data, setProfiles] = useState({ profiles:[] })
    
  //Función ciclo de vida 

    useEffect(()=>{
      async function getProfile(){
           const profileList = await PERFILES
           setProfiles(profileList)
       }
       getProfile()
       
   },[data])

    return (
        <div>
            <h1>Gente que tal vez conozcas</h1>
            <ProfileSection profiles={data.profiles}/>
        </div>
    )
}

export default Gente

/**
 * 
 * 
 * ===========================================================
 * GENTE -- SE ACTUALIZA CADA VEZ QUE SIGO A UN NUEVO USUARIO
 * 
 * Incognita a resolver..donde corno va la data... este es posiblemente el componente,
 * la recibie ProfileSection mediante una propiedad profiles={data}
 * 
 * Seccion -- 
 * 1-Gente para seguir
 * ===========================================================
 * 
 * 
 */