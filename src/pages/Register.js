import React, { useState } from "react";

export default function Register(){
    
    const [userRegistration, setuserRegistration] = useState({ //// back-end config/lokidb.js-ben más adatokat kap a user, úgyhogy átírtam ! :)
        email: "",
        password: "",
        name: "",
        birthdate: "",
        phone: ""
    })

    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;

        setuserRegistration({...userRegistration, [name] : value})
    }

    const handleSubmit = (e) =>{
        console.log(e.state);
        console.log(e.body);
        e.preventDefault();
        fetch ('http://localhost:5000/register', {  //// back end PORT-ja kell
            method: 'POST',
            body: JSON.stringify(this.state) //// ennek csak a userRegistration értékeit kéne átadni, nem az egész HTML KÓDOT (emiatt megy az "Unexpected token < at JSON")
        }) // cannot read properties of state
        .then(function(response){ 
            console.log(response)
            return response.json();
        })

        setuserRegistration({username: "", email:"", phone:"", password:""})
    }    
    
    

    return(
        <div className="login-register-container">
            <form  className="login-register-form" onSubmit={handleSubmit}>
                <h1 className="login-register-text">Regisztráció</h1>
                <div className="login-register">
                    <label>Email</label>
                        <input type="email" name="email" value={userRegistration.email} onChange={handleInput} className="login-register-input" placeholder="Email" />
                </div>
                <div className="login-register">
                    <label>Password</label>
                        <input type="password" name="password" value={userRegistration.password} onChange={handleInput} className="login-register-input" placeholder="Password" />
                </div>
                <div className="login-register">
                    <label>Name</label>
                        <input type="text" name="username" value={userRegistration.username} onChange={handleInput} className="login-register-input" placeholder="Name" />
                </div>
                <div className="login-register">
                    <label>Birthdate</label>
                        <input type="date" name="birthdate" value={userRegistration.birthdate} onChange={handleInput} className="login-register-input" placeholder="YYYY.MM.DD" />
                </div>
                <div className="login-register">
                    <label>Phone number</label>
                        <input type="text" name="phone" value={userRegistration.phone} onChange={handleInput} className="login-register-input" placeholder="Phone number" />
                </div>
                <div className="button-flex">
                    <button type="submit" className="btn-primary-login-register">Sign up</button>
                </div>
            </form>
            </div>
        )
    
    
}