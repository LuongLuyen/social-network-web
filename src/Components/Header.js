import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineVideoCamera } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { FaList } from 'react-icons/fa'
import { CiSearch } from 'react-icons/ci'
import { useDispatch} from "react-redux"
import introduceSlice from '../redux/Slice/introduceSlice'
import {Link} from "react-router-dom"
import { useEffect, useState } from 'react'
import "../Style/ComponentStyle/Header.css"
function Header() {
    const [localData, setLocalData] = useState(null)
    const [role, setRole] = useState(null)

    useEffect(() => {
        const data = JSON.parse(sessionStorage.getItem('localData'))
        const dataRole = JSON.parse(sessionStorage.getItem('role'))
        if (data && dataRole) {
            setLocalData(data)
            setRole(dataRole)
        }
    }, [])
    const dispatch = useDispatch()

    const clickRegister = ()=>{
        dispatch(introduceSlice.actions.statusLogin({register: true}, {login: false}))
    }
    const clickLogin = ()=>{
        dispatch(introduceSlice.actions.statusLogin({register: false}, {login: true}))
    }

    const checkLogin = () =>{
        sessionStorage.setItem('localData', JSON.stringify(null))
        sessionStorage.setItem('role', JSON.stringify(null))
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
                    <Link className="header__list-icon" to="/home">
                        <AiOutlineHome/>
                    </Link>
                    <span className="header__list-title">
                        Trang Chủ
                    </span>
                </span>
                <span className="header__list-item">
                    <Link className="header__list-icon" to="/film">
                        <AiOutlineVideoCamera/>
                    </Link>
                    <span className="header__list-title">
                        Phim
                    </span>
                </span>
                <span className="header__list-item">
                    <Link className="header__list-icon" to="/chat">
                        <RiMessengerLine/>
                    </Link>
                    <span className="header__list-title">
                        Nhắn tin
                    </span>
                </span>
                <span className="header__list-item">
                    {localData && role ?
                    <>
                        {role === "ADMIN" ? 
                            <Link className="header__register" to="/admin">
                                Admin 
                            </Link>
                            : 
                            <span className="header__register">Xin chào</span>
                        }
                        <span className="header__vach">|</span>
                        <span className="header__login">{localData}</span>
                        <Link onClick={checkLogin}className="header__logout" to="/">
                            Thoát !
                        </Link>
                    </>
                    : 
                    <>
                        <span onClick={clickRegister} className="header__register">Đăng ký</span>
                        <span className="header__vach">|</span>
                        <span onClick={clickLogin} className="header__login">Đăng nhập</span>
                    </>
                    }
                </span>
            </div>
            {/* <div className='header__nav'>
                <FaList/>
            </div> */}
        </header>
     )
}

export default Header