import { useState,useEffect } from "react"
import Header from "../Components/Header"
import '../Style/PageStyle/Introduce.css'
import Img from "../assets/img/aaa.jpg"
import Loginbg from "../assets/img/loginbg.jpg"
import Anhnen from "../assets/img/anhnen.jpg"
import Anhnen1 from "../assets/img/anhnen1.jpg"

function Introduce() {
    const [localData, setLocalData] = useState(null)

    useEffect(() => {
        if(localData !== null){
            sessionStorage.setItem('localData', JSON.stringify(localData))
        }
    }, [localData])

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
                        <img className="swipe" alt ="img" src={Loginbg}/>
                    </div>
                    <div className="content__article-main">
                        <div className="aside__hot-main">
                            <img className="bg" alt ="img" src={Anhnen1}/>
                            <div>
                                <div className="title2">
                                    [Gia đình TF] 2023 Chuỗi hòa nhạc "Kế hoạch hạ cánh" của gia đình TF - Born in Flame [Đánh giá]
                                </div>
                                <div className="title3">
                                    Triết học là bộ môn nghiên cứu về những vấn đề chung và cơ bản của con người, 
                                    thế giới quan và vị trí của con người trong thế giới quan, những vấn đề có kết 
                                    nối với chân lý, sự tồn tại, kiến thức, giá trị, quy luật, ý thức, và ngôn ngữ. 
                                </div>
                                <div className="title3">
                                    Kế hoạch hạ cánh - TransFormProject25 tháng 7 lúc 20:20
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content__article-main">
                        <div className="aside__hot-main">
                            <img className="bg" alt ="img" src={Anhnen}/>
                            <div>
                                <div className="title2">
                                    [Gia đình TF] 2023 Chuỗi hòa nhạc "Kế hoạch hạ cánh" của gia đình TF - Born in Flame [Đánh giá]
                                </div>
                                <div className="title3">
                                    Triết học là bộ môn nghiên cứu về những vấn đề chung và cơ bản của con người, 
                                    thế giới quan và vị trí của con người trong thế giới quan, những vấn đề có kết 
                                    nối với chân lý, sự tồn tại, kiến thức, giá trị, quy luật, ý thức, và ngôn ngữ. 
                                </div>
                                <div className="title3">
                                    Kế hoạch hạ cánh - TransFormProject25 tháng 7 lúc 20:20
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <aside className="content__aside">
                    <div className="content__aside-login">
                        Đăng nhập
                    <form method='POST' action= "http://localhost:5000/user-api/login">
                        <div className="aside__login-main">
                            <div>
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
                    </form>
                    </div>
                    <div className="content__aside-hot">
                        Chủ đề nóng trên mạng
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
     )
}

export default Introduce