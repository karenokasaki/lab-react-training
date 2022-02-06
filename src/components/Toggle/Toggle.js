import { useState } from "react/cjs/react.development";


function Toggle() {

    const [theme, setTheme] = useState('light')

    const toggleTheme = event => {
        console.log(event.target)
        setTheme(event.target.value)
    }

    const bg = {background: theme}

    return ( 
        <div className="theme" style={bg}>
            <select onChange={ toggleTheme }>
                <option value='red'> red </option>
                <option value='black'> Dark </option>
                <option value='blue'> blue </option>
            </select>
        </div>
     );
}

export default Toggle;