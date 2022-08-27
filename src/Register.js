import { useState, useEffect } from 'react'
import {faCheck, faTimes, faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const Register = ({handleSubmit}) => {
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
    <div className='Register'>
        <form onSubmit={(e)=> e.preventDefault()}>
                <h2>Welcome, Please register</h2>
                <label htmlFor="username">
                    <>Username:   </> 
                    {validUsername ? <FontAwesomeIcon icon={faCheck} /> : username && !validUsername ? <FontAwesomeIcon icon={faTimes} /> : null}
                </label>
                <input id="username" type='text' required autoFocus value={username} onChange={(e)=> setUsername(e.target.value)} autoComplete='off' placeholder='Please input a username' />
                {username && !validUsername ? <p id='usernote' className='instruction' >
                  <FontAwesomeIcon icon={faInfoCircle} /> 5 to 24 characters.<br />Must be letter or numbers.<br />
                </p> : null}
                <label htmlFor="password">
                    <>Password:    </>  
                    {validPassword ? <FontAwesomeIcon icon={faCheck} /> : password && !validPassword ? <FontAwesomeIcon icon={faTimes}/> :null}
                </label>
                <input id="password" placeholder='Please input password' required type='password' value={password} onChange={(e)=> setPassword(e.target.value)} />
                <p className={ password && !validPassword ? 'instruction' : 'offscreen'}>
                    At least 8 characters.<br />Must contain Uppercase, lowercase and numbers.<br />
                </p>
                <label htmlFor="confirm" >
                    <>Confirm Password:   </>
                    {cValidPassword && cPassword ? <FontAwesomeIcon icon={faCheck} /> : cPassword && !cValidPassword ? <FontAwesomeIcon icon={faTimes}/> :null}    
                </label>
                <input id="confirm" type='password' required value={cPassword} onChange={(e)=> setCPassword(e.target.value)} placeholder='Please Confirm password' />
                {cPassword && !cValidPassword && password ? <p className='instruction'>
                    password must match.<br />Must contain Uppercase, lowercase and numbers.<br />
                </p> : cPassword && !cValidPassword && !password ? <p className='instruction'> Please Input password in the previous input</p> :null }
                <button disabled={validPassword && validUsername && cValidPassword ? false : true} onClick={handleSubmit} >Submit</button> 
            </form>
    </div>
  )
}

export default Register