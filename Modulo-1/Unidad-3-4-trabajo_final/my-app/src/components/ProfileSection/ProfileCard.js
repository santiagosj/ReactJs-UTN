import React from 'react'
import Image from '../Image/Image'

const ProfileCard = ({
   imgPreview,
   handleClick,
   profile,
   ...props
}) => {
    return (
        <div>
            <label >
                    <input 
                        type='checkbox'
                        onClick={handleClick}
                        value={profile.title}
                    />
                    <div className='profile--box'>

                        <div className='profile--image'>
                            <Image 
                                imgSrc={imgPreview}
                                alt={profile.title}
                            />
                        </div>
                                        
                        <div>
                            <h3> {profile.title} </h3> 
                             <span>ver perfil</span> 
                        </div>
                        
                    </div> 
        
           </label>
        </div>
    )
}

export default ProfileCard
