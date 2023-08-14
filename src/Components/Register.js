import { useState } from 'react'
import { useDispatch} from 'react-redux'
import {createUser} from '../redux/Slice/introduceSlice'
import '../Style/ComponentStyle/Login.css'
function Register() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('USER')

    const dispatch = useDispatch()

    const sendData = ()=>{
        dispatch(createUser({
            userName: userName,
            password: password,
            fullName: fullName,
            email: email,
            role: role
        }))
    }
    const handleRole = (e)=>{
        e.target.checked ?  setRole("ADMIN") : setRole("USER")
    }

    return (  
        <div className="content__aside-login">
            Đăng Ký
            <div>
                <div className="aside__login-main">
                    <input 
                        className="input" 
                        placeholder="Username"
                        type='text'
                        name='userName'
                        onChange={(e)=>setUserName( e.target.value)}
                    />
                    <input 
                        className="input" 
                        placeholder="Password"
                        type='password'
                        name='password'
                        onChange={(e)=>setPassword( e.target.value)}
                    />
                    <input 
                        className="input" 
                        placeholder="FullName"
                        type='text'
                        name='fullName'
                        onChange={(e)=>setFullName( e.target.value)}
                    />
                    <input 
                        className="input" 
                        placeholder="NguyenVanA2222@gmail.com"
                        type='text'
                        name='email'
                        onChange={(e)=>setEmail( e.target.value)}
                    />
                    <div className='role'>
                        <div>Loại tài khoản: </div>
                        <div>
                            <input onChange={handleRole} type="checkbox"/>
                            Admin
                        </div>
                    </div>
                    <button onClick={sendData} className="login">Đăng ký</button>
                </div>
            </div>
        </div>
    )
}

export default Register