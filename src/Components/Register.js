import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import firebase from 'firebase/app'
import { useAlert } from 'react-alert'

const Register = () => {

    const alert = useAlert()
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [con__password, setCon__Password] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== con__password) {
            return alert.show('Passwords did not match')
        } else {
            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then((auth) => {
                    history.push('/')
                })
                .catch((err) => {
                    alert.show(err.message)
                })

            setEmail('')
            setPassword('')
            setCon__Password('')
        }
    }

    return (
        <div className='login'>
            <div className="login__wrapper">
                <div className="login__box">
                    <h1>Sign-Up</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete='off' placeholder='Email...' />
                        </div>
                        <div>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder='Password...' />
                            <p id='small__info'>Password must be atleast 6 characters</p>
                        </div>
                        <div>
                            <input type="password" value={con__password} onChange={(e) => setCon__Password(e.target.value)} required placeholder='Confirm Password...' />
                        </div>
                        <div>
                            <button type='submit' className='login'>Sign Up</button>
                        </div>
                        <div>
                            <p>Already have an account? <Link to='/login'>Sign In</Link></p>
                            <p>Back to <Link to='/'>Home</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
