import React, { useState } from "react";  // még a gombok nincsenek teljesen kész css kell!!


export default function Login({}){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) =>{
        fetch ('http://localhost:3000/login', {
            method: 'POST',
            body: JSON.stringify(this.state)
        })
        .then(function(response){
            console.log(response)
            return response.json();
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
                    <p className="register">Ha még nincs fiókod itt <a href="/register">regisztrálhatsz</a>!</p>
                <div className="button-flex">
                <button type="submit" className="btn-primary-login-register" >Sign in</button>
                </div>
            </form>
        </div>
        )
    
    
}