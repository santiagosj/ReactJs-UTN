import React,{ useState,useEffect } from 'react';
import axios from 'axios';
import './AppHolder.scss';
import ProfileSaction from '../../pages/ProfileSection'

const AppHolder = () => {
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

    return (
            <ProfileSaction profiles={data.profiles}/>
    )
}

export default AppHolder
