import React from 'react'
import './profile.scss'
import Image from '../components/Image/Image'

/**
 * 
 * @param {*} param0 
 * 
 * componentes: 
 *            |Aside
 *            |Content
 * 
 */

const profile = ({profile, checked, handleToggle, onDisplay}) => {

    return (
        <div className='profile--content'>
                 <label 
                    className='menu-wrap'
                    style={{ display: checked && onDisplay }} 
                 >
                     
                    <input 
                       type='checkbox' 
                       checked={checked}
                       onChange={handleToggle}
                    />
                              
                        <ul>
                            <div className='profile--image'>
                                <Image 
                                imgSrc={require(`../assets/${profile.imagen}`)}
                                />
                            </div>
                            <h1><span> {profile.title} </span> </h1>
                            <p>Teléfono: <span>{profile.teléfono} </span> </p>
                            <p>Email: <span> {profile.email} </span>  </p>
                            <p>Ciudad: <span> {profile.ciudad} </span>  </p>
                            <p>Descripción: <span>{profile.description}</span> </p>
                             Frases: 
                            {profile.frases.map(frase => <p className='frases'>{frase}</p>)}
                        </ul>

                 </label>
        </div>
    )
}

export default profile

/**
 * 
 * detalle del perfil
 * 
 */
