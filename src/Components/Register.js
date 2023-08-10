import { useState } from 'react'
import '../Style/ComponentStyle/Login.css'
function Register() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('USER')
    return (  
        <div className="content__aside-login">
            Đăng Ký
            <form method='POST' action= "/">
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
                        type='password'
                        name='password'
                        onChange={(e)=>setFullName( e.target.value)}
                    />
                    <input 
                        className="input" 
                        placeholder="nguyenvana2222@gmail.com"
                        type='password'
                        name='password'
                        onChange={(e)=>setEmail( e.target.value)}
                    />
                    <button className="login">Đăng ký</button>
                </div>
            </form>
        </div>
    )
}

export default Register