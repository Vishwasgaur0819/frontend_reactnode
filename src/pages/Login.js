import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { loginByMobile } from '../data/authentication';
import {useNavigate} from "react-router-dom";

const Login = (props) => {
    const navigate = useNavigate();
    const [userData, setuserData] = useState({ mobile: '', password: '' });


    const saveData = (e, key) => {
        setuserData((p) => { return { ...p, [key]: e.target.value } })
    }

    const checkAuthentication = async () => {
        // console.log("props are 12:",props.history)

        try {
            let body = { ...userData }
            const result = await loginByMobile(body);
            console.log("🚀 ~ file: Login.js:19 ~ checkAuthentication ~ result", result)
            if (result.statusCode === 200) {
                // alert('hi')
                navigate('/userList')
                console.log("result==> 123", result);
                alert(result.message)
               

                // setRefresh(!refresh)
            } else {
                alert(result.message)
                // setRefresh(!refresh)
            }
        } catch (err) {
            alert(JSON.stringify(err))
        }

        // setRefresh(!refresh)
    }

    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}} >
            <div className='childBox1'>
                {/* form below=============== */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                    <h3>Login</h3>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                    {/* <form onSubmit={submitUserData} > */}
                    <div style={{ display: 'flex', flexDirection: 'column', padding: 30, border: '2px solid', borderRadius: 10, }} >

                        <label>
                            Mobile
                        </label>
                        <input style={{ width: 300 }} type="text" name="mobile" onChange={(e) => saveData(e, 'mobile')} />

                        <label>
                            Pasword
                        </label>
                        <input style={{ width: 300 }} type="text" name="address" onChange={(e) => saveData(e, 'password')} />

                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10,display:'flex',justifyContent:'space-between' }} >
                            <Button onClick={checkAuthentication} variant="outline-success" >Submit</Button>
                            <Button  variant="outline-success" ><a href='/createUser' >Create New User</a></Button>
                        </div>
                    </div>
                    {/* </form> */}
                </div>
                {/* form above=============== */}
            </div>
        </div>
    )
}

export default Login;