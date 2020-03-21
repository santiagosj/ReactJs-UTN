import React from 'react'
import Image from '../Image/Image'

/**
 * componentes:
 *            | Imagen
 * content:
 *        | User info 
 */

const Aside = ({userImage, userInfo}) => {
    
    return (
        <aside>
          { userImage && (
             <div className="imageContainer">
               <Image 
                  background
                  imgSrc={userImage}
               />
             </div>
          )}
          { userInfo && (
             <div className="userInfo--section">
                <h3></h3>
                <p></p>
                <p></p>
             </div>
          )} 
        </aside>
    )
}

export default Aside
