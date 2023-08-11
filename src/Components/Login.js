import { useState,useEffect } from "react"
import '../Style/ComponentStyle/Login.css'
function Login() {
    const [localData, setLocalData] = useState(null)

    useEffect(() => {
        if(localData !== null){
            sessionStorage.setItem('localData', JSON.stringify(localData))
        }
    }, [localData])


    return ( 
        <div className="content__aside-login">
            Đăng nhập
            <form method='POST' action= "http://localhost:5000/user-api/login">
                <div className="aside__login-main">
                    <input 
                        className="input" 
                        placeholder="Username"
                        type='text'
                        name='userName'
                        onChange={(e)=>setLocalData( e.target.value)}
                    />
                    <input 
                        className="input" 
                        placeholder="Password"
                        type='password'
                        name='password'
                    />
                    <div className="content__login">
                        <div className="content__d">
                            <input type="checkbox"/>
                            <span> Ghi nhớ tôi</span>
                        </div>
                        <div className="content__d"> quên mật khẩu</div>
                    </div>
                        <button className="login">Đăng nhập</button>
                    <div className="content__register">
                        Mình chưa có tài khoản ? Đăng ký ngay nào
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login