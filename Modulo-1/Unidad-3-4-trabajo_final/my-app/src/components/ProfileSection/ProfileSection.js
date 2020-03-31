import React, {useState, useEffect } from 'react'
import './ProfileSection.scss'
import Profile from '../Profile/Profile'
import ProfileCard from './ProfileCard'
import Follow from '../Follow/Follow'

 const ProfileSection = ({profiles}) => {

    const [checked, setChecked] = useState(false);
   
    const [profile, setProfile] = useState(undefined,'')

    function handleClick(e){
       if(checked){
           setChecked(!checked)
       } else{
           setChecked(!!checked)
       }
       
       setProfile(e.target.value)
       console.log(e.target.value)
    }
   
      const filterdProfile = profiles.filter(result => result.title === profile)

      return (

                <section>
                   
                    <h2>Perfiles</h2>    

                    {!!profiles.length && (
                         <div className='profiles--container'>
                             {profiles.map( (profile, i) => (
                                 <div key={i} className='profile--container'>
                                    <ProfileCard
                                        profile={profile}
                                        imgPreview={require(`../../assets/${profile.imagen}`)}
                                        handleClick={handleClick}
                                    />
                                    <Follow 
                                       nombre={profile.title} 
                                    />
                                 </div>
                             ))} 
                         </div>
                    )}

                    <section>
                        <div>
                             <Profile
                                 profiles={filterdProfile}
                                 checked={checked} 
                                 handleToggle={() => setChecked(!checked)}
                                 onDisplay={'none'}
                             />
                        </div>
                    </section>

                </section>
             )
         }

export default ProfileSection

/**
 * 
 * grid de perfiles
 * 
 */