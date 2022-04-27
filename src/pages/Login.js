import React, { useState } from "react";  // még a gombok nincsenek teljesen kész css kell!!
import { Link, Navigate, useHistory } from "react-router-dom";


export default function Login({}){

    const navigate= useHistory();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        fetch ('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({email, password})
        })
        .then(async function(response){
            console.log(response)
            response = await response.json();
            window.sessionStorage.setItem("userId", response.userid)
            navigate.push("/")
        })
        e.preventDefault()
    }   
    
    return(
        <div className="login-register-container">
            <form  className="login-register-form" onSubmit={handleSubmit}>
                <h1 className="login-register-text">Bejeletkezés</h1>
                <div className="login-register">
                    <label>Email</label>
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)} className="login-register-input" placeholder="Email" />
                </div>
                <div className="login-register">
                    <label>Password</label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="login-register-input" placeholder="Password" />
                </div>
                    <p className="register">Ha még nincs fiókod itt <Link to="/register">regisztrálhatsz</Link>!</p>
                <div className="button-flex">
                <button type="submit" className="btn-primary-login-register" >Sign in</button>
                </div>
            </form>
        </div>
        )
    
    
}