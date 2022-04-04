import React, { useState } from "react";

export default function Register(){
    
    const [userRegistration, setuserRegistration] = useState({
        username: "",
        email: "",
        phone: "",
        birthdate: "",
        password: ""
    })

    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;

        setuserRegistration({...userRegistration, [name] : value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        setuserRegistration({username: "", email:"", phone:"", password:""})
    }    
    
    

    return(
        <div className="login-register-container">
            <from  className="login-register-form" onSubmit={handleSubmit}>
                <h1 className="login-register-text">Regisztráció</h1>
                <div className="login-register">
                    <label>Name</label>
                        <input type="text" name="username" value={userRegistration.username} onChange={handleInput} className="login-register-input" placeholder="Name" />
                </div>
                <div className="login-register">
                    <label>Email</label>
                        <input type="email" name="email" value={userRegistration.email} onChange={handleInput} className="login-register-input" placeholder="Email" />
                </div>
                <div className="login-register">
                    <label>Phone number</label>
                        <input type="text" name="phone" value={userRegistration.phone} onChange={handleInput} className="login-register-input" placeholder="Phone number" />
                </div>
                <div className="login-register">
                    <label>Birthdate</label>
                        <input type="date" name="birthdate" value={userRegistration.birthdate} onChange={handleInput} className="login-register-input" placeholder="YYYY.MM.DD" />
                </div>
                <div className="login-register">
                    <label>Password</label>
                        <input type="text" name="password" value={userRegistration.password} onChange={handleInput} className="login-register-input" placeholder="Password" />
                </div>
                <div className="button-flex">
                    <button type="submit" className="btn-primary-login-register">Sign up</button>
                </div>
            </from>
            </div>
        )
    
    
}
    