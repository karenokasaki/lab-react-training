import { useState } from 'react'


function Toggle() {

    const [theme, setTheme] = useState('light')

    const toggleTheme = event => {
        setTheme(event.target.value)
    }

    const bg = { background: theme }

    return (
        <div className="theme" style={bg}>
            <select onChange={toggleTheme}>
                <option value='red'> red </option>
                <option value='black'> Dark </option>
                <option value='blue'> blue </option>
            </select>
        </div>
    );
}

export default Toggle;