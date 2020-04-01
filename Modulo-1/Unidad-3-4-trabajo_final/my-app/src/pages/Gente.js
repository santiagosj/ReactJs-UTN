import React,{ useState,useEffect } from 'react';
import ProfileSection from '../components/ProfileSection/ProfileSection'
//import axios from 'axios';

const PERFILES = {

   profiles:[
      {
         id: 1,
         siguiendo:false,
         title: "Rick Sanchez",
         description: "Ceintífico 🥃",
         twits: ["Las bodas son básicamente funerales con un pastel.", "...pensé que todo el punto de tener un perro era sentirse superior..","Bien, científicamente, las tradiciones son estúpidas."],
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
         twits: ["No lo sé Rick..", "Jessicaa 🧡🧡🧡🧡","Nadie existe a propósito, nadie pertenece aningún sitio, todos vamos a morir...ven a ver tele.." ],
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
         description: "Estudiante, escucha a Elliott Smith 🎶 🎵",
         twits: ["Todo lo que tengo son fotos mías y de mis amigos de la escuela. ¿Cuál es el problema? ¿Qué chica adolescente tiene fotos de su familia? No es como si fuésemos mormones o nos estuviéramos muriendo."],
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
         twits: ["Tommy aún está ahí violando Muppets y comiendo bebés 😟", "Me estoy quedando sin excusas para no ser quien soy, ¿así que quién soy? 🤔🙄 "],
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
         twits: ["No lo entiendo, ni necesito entenderlo", "Supongo que simplemente soy el papel de baño de toda esta familia.🚽"],
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
         twits: ["Soy todo lo que buscas pero en guapo 😊", "¡Oooh weeeee!"],
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