import { useState,useEffect } from "react"
import '../Style/ComponentStyle/Login.css'
import axios from "axios"
function Login() {
    const [localData, setLocalData] = useState(null)
    const [role, setRole] = useState(null)
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState(null)

    useEffect(() => {
        if(localData !== null && role !== null){
            sessionStorage.setItem('localData', JSON.stringify(localData))
            sessionStorage.setItem('role', JSON.stringify(role))
        }
    }, [localData,role])

    const Authentication = async()=> {
        if(userName ==="" || password === ""){
            setStatus("TK hoặc MK chưa điền")
            return null
        }
        try{
            const res = await axios.post("http://localhost:8080/socialnetwork/login", {userName, password})
            const dataDB = res.data
            if(dataDB.userName === userName && dataDB.password === password && dataDB.role === "USER"){
                setLocalData(dataDB.userName)
                setRole(dataDB.role)
                window.location.href = "http://localhost:3000/home"
            }else if(dataDB.userName === userName && dataDB.password === password && dataDB.role === "ADMIN"){
                setLocalData(dataDB.userName)
                setRole(dataDB.role)
                window.location.href = "http://localhost:3000/admin"
            }else {
                setStatus("Sai TK hoặc MK")
                return null
            }
        }catch(err){
            return null
        }
    }

    const handleName = (e)=>{
        setLocalData( e.target.value)
        setUserName( e.target.value)
    }
    const handlePassword = (e)=>{
        setPassword( e.target.value)
    }
    

    return ( 
        <div className="content__aside-login">
            Đăng nhập
            <div>
                <div className="aside__login-main">
                    <input 
                        className="input" 
                        placeholder="Username"
                        type='text'
                        name='userName'
                        onChange={handleName}
                    />
                    <input 
                        className="input" 
                        placeholder="Password"
                        type='password'
                        name='password'
                        onChange={handlePassword}
                    />
                    {status && <div className="login__status">{status}</div>}
                    <div className="content__login">
                        <div className="content__d">
                            <input type="checkbox"/>
                            <span> Ghi nhớ tôi</span>
                        </div>
                        <div className="content__d"> quên mật khẩu</div>
                    </div>
                        <div onClick={Authentication} className="login">Đăng nhập</div>
                    <div className="content__register">
                        Mình chưa có tài khoản ? Đăng ký ngay nào
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
