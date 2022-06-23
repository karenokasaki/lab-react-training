import style from './Facebook.module.css'
import profiles from '../../data/berlin.json';
import { useState } from 'react';

function Facebook() {

    const [profile, setProfile] = useState(profiles)
    const [bgColor, setBgColor] = useState()
    const [click, setClick] = useState('All')
    const [showInfo, setShowInfo] = useState(true)
    const [search, setSearch] = useState('')
    //Bonus

    const listCountries = new Set(profiles.map((profile) => profile.country))
    const countryArray = Array.from(listCountries)

    function handleClick(event) {
        setClick(event.target.innerText)
        setBgColor({
            display: 'flex',
            border: '1px solid black',
            width: '600px',
            backgroundColor: 'lightskyblue'
        })
    }

    function handleChange(event) {
        setSearch(event.target.value)
    }

    function handleSortTeacher() {
        setProfile(
            profiles.filter((profile) => !profile.isStudent)
        )
    }

    function handleSortStudent() {
        setProfile(
            profiles.filter((profile) => profile.isStudent)
        )
    }

    function handleAll() {
        setProfile(profiles)
    }


    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div>Sort:
                <button onClick={handleAll}>All</button>
                <button onClick={handleSortTeacher}>Teacher</button>
                <button onClick={handleSortStudent}>Student</button>
            </div>

            <div>
                <button onClick={() => setClick('All')}>All</button>
                {countryArray.map((country) => <button onClick={handleClick}>{country}</button>)}
            </div>

            <div>
                <input placeholder='Search by name...' onChange={handleChange} value={search} />
            </div>

            {profile
                .filter((profile) => ((profile.firstName)).toLowerCase().includes(search.toLowerCase()))
                .map((profile) => {
                    return (
                        <div
                            className={style.facebook}
                            style={click === profile.country ? bgColor : { backgroundColor: 'white' }}
                            key={profile.firstName}
                        >
                            <img
                                className={style.img}
                                src={profile.img} alt='perfil'
                                onClick={() => setShowInfo(!showInfo)}
                            />
                            {showInfo &&
                                <div className={style.info}>
                                    <p><strong>First Name:</strong> {profile.firstName}</p>
                                    <p><strong>Last Name:</strong> {profile.lastName}</p>
                                    <p><strong>Country:</strong> {profile.country}</p>
                                    <p><strong>Type:</strong> {profile.isStudent ? 'Student' : 'Teacher'}</p>
                                </div>
                            }

                        </div>
                    )
                })}

        </div>
    );
}

export default Facebook;