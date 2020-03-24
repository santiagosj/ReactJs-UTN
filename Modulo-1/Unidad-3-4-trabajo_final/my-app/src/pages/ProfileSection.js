import React,{useState} from 'react'
import Image from '../components/Image/Image'
import './ProfileSection.scss'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Profile from './profile'

const ProfileSection = ({profiles}) => {

    const [checked, setChecked] = useState(false);

    return (

               <Router>
       
                <div>
                   
                    <h2>Perfiles</h2>    

                    <div className='profiles--container' >
 
                    {profiles.map(profile =>(

                        <div key={profile.id}>

                          {profile && (
                              <div onClick={() => setChecked(!checked)}>

                                <Link to={`/profile/${profile.title}`}>
                                        
                                        <div className='profile--box'>

                                            <div className='profile--image'>
                                                    <Image 
                                                      imgSrc={require(`../assets/${profile.imagen}`)}
                                                      alt={profile.title}
                                                    />
                                                </div>
                                                    
                                                <div>
                                                    <h3> {profile.title} </h3> 
                                                    ver perfil
                                                </div>

                                        </div> 
                                </Link>

                              </div>
                             )}
                                 
                                <Switch>
                                   <Route exact path={`/profile/${profile.title}`}>
                                       <Profile 
                                             profile={profile} 
                                             checked={checked} 
                                             handleToggle={() => setChecked(!checked)}
                                             onDisplay={'none'}
                                       />
                                   </Route>
                                </Switch>
                      
                        </div>
                       
                     ))}  

                    </div>

                   </div>

                </Router>
             )
         }

export default ProfileSection

/**
 * grid de perfiles
 * 
 */