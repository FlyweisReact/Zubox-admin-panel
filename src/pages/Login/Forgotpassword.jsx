import React, { useState } from 'react'
import '../../css/Login.css'
import { FaArrowLeft } from "react-icons/fa6";

import img from '../../assest/logo.png'
import img1 from '../../assest/img.gif'
import { useNavigate } from 'react-router-dom';

const Forgotpassword = () => {

    const navigate = useNavigate()
    const [show, setShow] = useState(false);

    const toggele = () => {
        setShow(true)
        setTimeout(() => {
            navigate('/')
        }, 3000);
    }

    return (
        <>
            <div className='logincontainer'>
                <div className='loginsubcontainer'>
                    <div className='loginlogocontainer'>
                        <div className='loginlogo'>
                            <img src={img} alt="" />
                        </div>
                    </div>
                    {!show &&
                        <>
                            <div className='loginadmin'>
                                <h1>Forgot password?</h1>
                                <p>We'll send you a link to reset your password.</p>
                            </div>
                            <div className='logininputs'>
                                <div className='logininputsemail'>
                                    <label htmlFor="">Email</label>
                                    <input
                                        type="email"
                                        placeholder='Enter your email'
                                    />
                                </div>
                            </div>
                            <div className='loginbutton'>
                                <button onClick={toggele}>Reset Password</button>
                                <div className='loginbuttonback' onClick={() => navigate('/')}>
                                    <FaArrowLeft color='#000000' size={20} />
                                    <span>Back</span>
                                </div>
                            </div>
                        </>
                    }
                    {show &&
                        <>
                            <div className='forgetpassword'>
                                <div className='forgetpasswordcontainer'>
                                    <img src={img1} alt="" />
                                </div>
                            </div>
                            <div className='loginadmin'>
                                <h1>Rest link sent succesfully</h1>
                                <p>Please check your mail.</p>
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default Forgotpassword