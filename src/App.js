import { useState, useEffect } from 'react'


function App() {
    const [username, setUsername] = useState('')
    const [validUsername, setValidusername] = useState(false)

    const [password, setPassword] = useState('')
    const [validPassword, SetValidPassword] = useState(false)

    const [cPassword, setCPassword] = useState('')
    const [cValidPassword, SetCValidPassword] = useState(false)

    const USER_REGEX = /^[A-Za-z][A-Za-z0-9_]{4,29}$/;
    const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

    
    useEffect(()=> {
        const result = USER_REGEX.test(username)
        console.log(result)
        console.log(username)
        setValidusername(result)
    },[username])
    useEffect(()=> {
        const result = PASSWORD_REGEX.test(password)
        console.log(result)
        console.log(password)
        SetValidPassword(result)
        const match = password === cPassword
        console.log(match)
        console.log(cPassword)
        SetCValidPassword(match)
    }, [password, cPassword])
    console.log(validUsername) 
    console.log(validPassword)
    console.log(cValidPassword)
    return ( 
        <div className = "App" >
            <form onSubmit={(e)=> e.preventDefault()}>
                <h2>Welcome, Please register</h2>
                <label htmlFor="username">
                    Username:
                </label>
                <input id="username" type='text' autoFocus value={username} onChange={(e)=> setUsername(e.target.value)} autoComplete='off' aria-invalid={!validUsername ? 'true' : 'false'} aria-describedby='usernote' />
                <p id='usernote' className={ username && !validUsername ? 'instruction' : 'offscreen' }>
                    5 to 24 characters.<br />Must be letter or numbers.<br />
                </p>
                <label htmlFor="password">
                    Password:
                </label>
                <input id="password" type='password' value={password} onChange={(e)=> setPassword(e.target.value)} />
                <p className={ password && !validPassword ? 'instruction' : 'offscreen'}>
                    At least 8 characters.<br />Must contain Uppercase, lowercase and numbers.<br />
                </p>
                <label htmlFor="confirm" >
                    Confirm Password:
                </label>
                <input id="confirm" type='password' value={cPassword} onChange={(e)=> setCPassword(e.target.value)} />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default App;