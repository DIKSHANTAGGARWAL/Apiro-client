import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [selecteduser, setSelecteduser] = React.useState('')
    const navigate = useNavigate();
    // useEffect(() => {
    //     navigate("/")
    // })

    const signin = () => {
        navigate('/app/home')
    }

    const selectUser = (type) => {
        setSelecteduser(type)
    }


    return (
        <div className='signup'>
            <div className='signup-left'>
                <h1>WELCOME BACK</h1>
            </div>

            <div className='signup-right'>
                {/* <br />
                <br />
                <br /> */}
                <h1 className='signup-head'>SIGN IN</h1>
                <p className='signup-para' >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <br />
                <br />
                <input className='signup-email' type='text' placeholder='Enter your email' value={email}
                    onChange={(e) => { setEmail(e.target.value) }} />
                <input className='signup-email' type='password' placeholder='Enter your password' value={password}
                    onChange={(e) => { setPassword(e.target.value) }} />
                <h3>LOGIN AS</h3>
                <div>
                    <button className={selecteduser === "Brand Partner" ? 'signup-user-btn-selected' : 'signup-user-btn'} onClick={() => selectUser("Brand Partner")}>Brand Partner</button>
                    <button className={selecteduser === "Distributer" ? 'signup-user-btn-selected' : 'signup-user-btn'} onClick={() => selectUser("Distributer")}>Distributer</button>
                    <button className={selecteduser === "Retailer" ? 'signup-user-btn-selected' : 'signup-user-btn'} onClick={() => selectUser("Retailer")}>Retailer</button>
                </div>
                <br />
                <button className='signup-sign-btn' onClick={signin}>SIGN IN</button>
            </div>
        </div>
    )
}

export default Signup
