import Header from "../Components/Header"
import '../Style/PageStyle/Introduce.css'
import Img from "../assets/img/aaa.jpg"
function Introduce() {
    return ( 
        <div>
            <Header/>
            <div className="content">
                <nav className="content__nav">
                    <div className="content__nav-item">
                        <div className="content__nav-btn">Phổ biến</div>
                    </div>
                    <div className="content__nav-item">
                        <div className="content__nav-btn">Giáo dục</div>
                    </div>
                    <div className="content__nav-item">
                        <div className="content__nav-btn">Phim</div>
                    </div>
                    <div className="content__nav-item">
                        <div className="content__nav-btn">Sắc đẹp</div>
                    </div>
                    <div className="content__nav-item">
                        <div className="content__nav-btn">Giải trí</div>
                    </div>
                    <div className="content__nav-item">
                        <div className="content__nav-btn">Nghệ thuật</div>
                    </div>
                    <div className="content__nav-item">
                        <div className="content__nav-btn">Game</div>
                    </div>
                </nav>
                <article className="content__article">
                    <div className="content__article-swiper">
                        swiper
                    </div>
                    <div className="content__article-main">
                        main
                    </div>
                    <div className="content__article-main">
                        main
                    </div>
                </article>
                <aside className="content__aside">
                    <div className="content__aside-login">
                        Đăng nhập
                        <div className="aside__login-main">
                            <div>
                                <input className="input" placeholder="Username"/>
                                <input className="input" placeholder="Passwork"/>
                            </div>
                            <div className="content__register">
                                <span> Ghi nhớ tôi</span>
                                <span> quên mật khẩu</span>
                            </div>
                            <button className="login">Đăng nhập</button>
                            <div className="content__register">
                                Mình chưa có tài khoản ? Đăng ký ngay nào
                            </div>
                        </div>
                    </div>
                    <div className="content__aside-hot">
                        Chủ đề nóng trên [name]
                        <div className="aside__hot-main">
                            <img className="img" alt ="img" src={Img}/>
                            <div>
                                <div className="title">Cảm hứng của ngày...</div>
                                <div className="title1">60,024 triệu lượt đọc 6320...</div>
                            </div>
                        </div>
                        <div className="aside__hot-main">
                            <img className="img" alt ="img" src={Img}/>
                            <div>
                                <div className="title">Cảm hứng của ngày...</div>
                                <div className="title1">60,024 triệu lượt đọc 6320...</div>
                            </div>
                        </div>
                        <div className="aside__hot-main">
                            <img className="img" alt ="img" src={Img}/>
                            <div>
                                <div className="title">Cảm hứng của ngày...</div>
                                <div className="title1">60,024 triệu lượt đọc 6320...</div>
                            </div>
                        </div>
                        <div className="aside__hot-main">
                            <img className="img" alt ="img" src={Img}/>
                            <div>
                                <div className="title">Cảm hứng của ngày...</div>
                                <div className="title1">60,024 triệu lượt đọc 6320...</div>
                            </div>
                        </div>
                        <div className="aside__hot-main">
                            <img className="img" alt ="img" src={Img}/>
                            <div>
                                <div className="title">Cảm hứng của ngày...</div>
                                <div className="title1">60,024 triệu lượt đọc 6320...</div>
                            </div>
                        </div>
                        <div className="aside__hot-main">
                            <img className="img" alt ="img" src={Img}/>
                            <div>
                                <div className="title">Cảm hứng của ngày...</div>
                                <div className="title1">60,024 triệu lượt đọc 6320...</div>
                            </div>
                        </div>
                        <div className="aside__hot-main">
                            <img className="img" alt ="img" src={Img}/>
                            <div>
                                <div className="title">Cảm hứng của ngày...</div>
                                <div className="title1">60,024 triệu lượt đọc 6320...</div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
     );
}

export default Introduce;