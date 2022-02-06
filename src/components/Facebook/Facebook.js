import './Facebook.css'
import profiles from '../../data/berlin.json';
import { useState } from 'react/cjs/react.development';

function Facebook() {

    const [profile, setProfile] = useState(profiles)

    return ( 
        <div>
            {profile.map((profile) => 
                <div className='facebook'>
                    <img className='img' src={profile.img} alt='perfil'></img>
                    <div className='info'>
                        <p>First Name: {profile.firstName}</p>
                        <p>Last Name: {profile.lastName}</p>
                        <p>Country: {profile.country}</p>
                        <p>Type: {profile.isStudent ? 'Student' : 'Teacher'}</p>  
                    </div>
                </div>)}
        </div>
     );
}

export default Facebook;