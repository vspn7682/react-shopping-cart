import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import firebase from 'firebase/app'
import { useAlert } from 'react-alert'

const Login = () => {

    const alert = useAlert()
    const history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.goBack()
            })
            .catch((err) => {
                alert.show('Username & Password does not match')
            })
    }

    return (
        <div className='login'>
            <div className="login__wrapper">
                <div className="login__box">
                    <h1>Sign-In</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete='off' placeholder='Email...' />
                        </div>
                        <div>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder='Password...' />
                        </div>
                        <div>
                            <button type='submit' className='login'>Sign In</button>
                        </div>
                        <div>
                            <p>New Here? <Link to='/register'>Create An Account</Link></p>
                            <p>Back to <Link to='/'>Home</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
