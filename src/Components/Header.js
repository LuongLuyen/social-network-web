import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineVideoCamera } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { CiSearch } from 'react-icons/ci'
import {Link} from "react-router-dom"
import "../Style/ComponentStyle/Header.css"
import { useEffect, useState } from 'react'
function Header() {
    const [localData, setLocalData] = useState(null)
    console.log(localData)
    useEffect(() => {
        const data = JSON.parse(sessionStorage.getItem('localData'))
        if (data) {
            setLocalData(data)
        }
    }, [])

    const checkLogin = () =>{
        sessionStorage.setItem('localData', JSON.stringify(null))
    }
    return ( 
        <header className="header">
            <div className="header__search">
                <Link to="/home" className="header__logo">
                    Logo
                </Link>
                <input className="header__input" placeholder="Tìm kiếm"/>
                <span className="search">
                    <CiSearch/>
                </span>
            </div>
            <div className="header__list">
                <span className="header__list-item">
                    <span className="header__list-icon">
                        <AiOutlineHome/>
                    </span>
                    <Link className="header__list-title" to="/home">
                        Trang chủ
                    </Link>
                </span>
                <span className="header__list-item">
                    <span className="header__list-icon">
                        <AiOutlineVideoCamera/>
                    </span>
                    <Link className="header__list-title" to="/film">
                        Phim
                    </Link>
                </span>
                <span className="header__list-item">
                    <span className="header__list-icon">
                        <RiMessengerLine/>
                    </span>
                    <Link className="header__list-title" to="/chat">
                        Nhắn tin
                    </Link>
                </span>
                <span className="header__list-item">
                    {localData ?
                    <>
                        <span className="header__register">Xin chào</span>
                        <span className="header__vach">|</span>
                        <span className="header__login">{localData}</span>
                        <Link onClick={checkLogin}className="header__logout" to="/">
                            Thoát !
                        </Link>
                    </>
                    : 
                    <>
                        <span className="header__register">Đăng ký</span>
                        <span className="header__vach">|</span>
                        <span className="header__login">Đăng nhập</span>
                    </>
                    }
                </span>
            </div>
        </header>
     )
}

export default Header