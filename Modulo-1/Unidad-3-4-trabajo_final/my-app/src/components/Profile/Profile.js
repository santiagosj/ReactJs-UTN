import React from 'react'
import './Profile.scss'
import Image from '../Image/Image'
import Follow from '../Follow/Follow'

const Profile = ({
      profiles, 
      checked, 
      handleToggle, 
      onDisplay,
      
    }) => {

    return (
        <div className='profile--content'>

             {profiles && profiles.map((profile,i) => (
                <label 
                    key={i}
                    className='menu-wrap'
                    style={{ display: checked && onDisplay }} 
                >
                 
                <input
                   className='close' 
                   type='checkbox' 
                   checked={checked}
                   onChange={handleToggle}
                />
                          
                    <div className='content--container'>
                        
                        <div className='profile--image'>
                            <Image 
                               alt={`imagen de ${profile.title}`}
                               imgSrc={require(`../../assets/${profile.imagen}`)}
                            />
                        </div>
                            
                            <h1><span> {profile.title} </span> </h1>
                            <p>Teléfono: <span>{profile.teléfono} </span> </p>
                            <p>Email: <span> {profile.email} </span>  </p>
                            <p>Ciudad: <span> {profile.ciudad} </span>  </p>
                            <p>Descripción: <span>{profile.description}</span> </p>
                                 Twits: {profile.id} 
                            {profile.twits.map( (twit,i) => <p className='frases' key={i}>{twit}</p>)}

                      </div>

             </label>

           ))}    

        </div>
    )
}

export default Profile

