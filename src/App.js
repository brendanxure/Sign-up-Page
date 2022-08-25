import { useRef, useState, useEffect } from 'react'

function App() {
    const [username, setUsername] = useState('')
    const [validUsername, setValidusername] = useState(false)

    const [password, setPassword] = useState('')
    const [validPassword, SetValidPassword] = useState(false)


    return ( 
        <div className = "App" >
            <form onSubmit={(e)=> e.preventDefault()}>
                <h2>Welcome, Please register</h2>
                <label htmlFor="username">
                    Username:
                </label>
                <input id="username" type='text' />
                <label htmlFor="password">
                    Password:
                </label>
                <input id="password" type='password'  />
                <label htmlFor="confirm" >
                    Confirm Password:
                </label>
                <input id="confirm" type='password' />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default App;