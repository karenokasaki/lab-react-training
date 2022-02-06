import {useState} from 'react'

function SignupPage() {

    const [lang, setLang] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLang = event => {
        setLang(event.target.value)
    }

    const handleEmail = event => {
        setEmail(event.target.value)
    }

    const handlePassword = event => {
        setPassword(event.target.value)
    }


    return ( 
        <div>
            <form>
                <label>Email: </label>
                <input 
                    onChange={handleEmail}
                    type='email'
                    value={email}
                />
                <label>Password</label>
                <input 
                    onChange={handlePassword}
                    type='password'
                    value={password}
                />
                <select onChange={handleLang}>
                    <option value='en'>en</option>
                    <option value='de'>de</option>
                    <option value='fr'>fr</option>
                </select>
                <button>Sign Up</button>
            </form>
            <div>
                <div>
                    {lang === 'en' ? <p>Hello</p> : null}
                    {lang === 'de' ? <p>Hallo</p> : null}
                    {lang === 'fr' ? <p>Bonjour</p> : null}
                </div>
                <div>
                    Your email adress is: {email}
                </div>
            </div>
        </div>
     );
}

export default SignupPage;