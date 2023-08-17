import Header from "../Components/Header"
import Login from "../Components/Login"
import Register from "../Components/Register"
import CreateUser from "../Components/CreateUser"
import Img from "../assets/img/aaa.jpg"
import Loginbg from "../assets/img/loginbg.jpg"
import Anhnen from "../assets/img/anhnen.jpg"
import Anhnen1 from "../assets/img/anhnen1.jpg"
import { useSelector } from "react-redux"
import {statusLoginSelector} from '../redux/selectors'
import {createUserSelector} from '../redux/selectors'
import '../Style/PageStyle/Introduce.css'

function Introduce() {
    const statusStore = useSelector(statusLoginSelector)
    const createUserStore = useSelector(createUserSelector)
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
                    {statusStore.loginRegister.register? <Register/>: <Login/>}
                    <div className="content__aside-hot">
                        {createUserStore[0] && <CreateUser props = {createUserStore[0]}/>}
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