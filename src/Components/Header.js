import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineVideoCamera } from 'react-icons/ai';
import { SiRiotgames } from 'react-icons/si';
import { CiSearch } from 'react-icons/ci';
import {Link} from "react-router-dom"
import "../Style/ComponentStyle/Header.css"
function Header() {
    return ( 
        <header className="header">
            <div className="header__search">
                <div className="header__logo">Logo</div>
                <input className="header__input" placeholder="Tìm kiếm"/>
                <span className="search">
                    <CiSearch/>
                </span>
            </div>
            <div className="header__list">
                <span className="header__list-item">
                    <AiOutlineHome/>
                    <span>Trang chủ</span>
                </span>
                <span className="header__list-item">
                    <AiOutlineVideoCamera/>
                    <span>Phim</span>
                </span>
                <span className="header__list-item">
                    <SiRiotgames/>
                    <span>Trò chơi</span>
                </span>
                <span className="header__list-item">
                    <span className="header__register">Đăng ký</span>
                    <span className="header__vach">|</span>
                    <span className="header__login">Đăng nhập</span>
                </span>
            </div>
        </header>
     );
}

export default Header;