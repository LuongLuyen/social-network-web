import Earth from "../Components/Earth"
import "../Style/PageStyle/Home.css"
import { BsPhoneFlip } from 'react-icons/bs'
import { ImNotification } from 'react-icons/im'
import { BiGroup } from 'react-icons/bi'
import { PiNumberCircleOneFill } from 'react-icons/pi'
import { PiNumberCircleTwoFill } from 'react-icons/pi'
import { PiNumberCircleThreeFill } from 'react-icons/pi'
import { PiNumberCircleFourFill } from 'react-icons/pi'
import { PiNumberCircleFiveFill } from 'react-icons/pi'
import { PiNumberCircleSixFill } from 'react-icons/pi'
import { PiNumberCircleSevenFill } from 'react-icons/pi'
import { PiNumberCircleEightFill } from 'react-icons/pi'
import { PiNumberCircleNineFill } from 'react-icons/pi'
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchPost } from "../redux/Slice/homeSlice"
import Img from "../assets/img/aab.jpg"
import Homebg from "../assets/img/homebg.jpg"
import HomeContent from "../Components/HomeContent"
import Header from "../Components/Header"
import Nav from "../Components/Nav"
function Home() {
    const CHECK = (window.location.pathname).slice(1)
    const [active, setActive]= useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPost())
        if(CHECK === "home"){
            const roleOld = JSON.parse(sessionStorage.getItem('role'))
            if(roleOld !== "ADMIN")
            sessionStorage.setItem('role', JSON.stringify("USER"))
        }else if(CHECK === "admin"){
            const roleOld = JSON.parse(sessionStorage.getItem('role'))
            if(roleOld === null){
                sessionStorage.setItem('role', JSON.stringify("ADMIN"))
            }
        }
    }, [CHECK,dispatch])

    const changeHeader = ()=>{
        if(window.scrollY >= 160){
            setActive(true)
        }else{
            setActive(false)
        }
    }
    window.addEventListener('scroll', changeHeader)
    
    return ( 
        <>
            <div className="home">
                <Earth/>
                <div className="homecontent">
                    <Nav/>

                    <article className="home__article">
                        <section>
                            <div className="home__article-box1">
                                <span className="home__article-box1-item">
                                    Phổ biến
                                </span>
                                <span className="home__article-box1-item">
                                    Giáo dục
                                </span>
                                <span className="home__article-box1-item">
                                    Game
                                </span>
                                <span className="home__article-box1-item">
                                    Giải trí
                                </span>
                                <span className="home__article-box1-item">
                                    Xã hội
                                </span>
                                <span className="home__article-box1-item">
                                    Tin tức
                                </span>
                                <span className="home__article-box1-item">
                                    Phim
                                </span>
                                <span className="home__article-box1-item">
                                    Thể thao
                                </span>
                            </div>
                            <div className="home__article-box2">
                                <img className="home__article-box2-img" alt="img" src = {Homebg}/>
                            </div>
                        </section>

                        <HomeContent/>
                        
                    </article>

                    <aside className="home__aside">
                        <div className="home__aside-box1">
                            <img className="home__aside-box1-img" alt="img" src = {Img}/>
                        </div>
                        <div className="home__aside-box2">
                            <h5>
                                Tìm kiếm nhiều nhất
                            </h5>
                            <div className="home__aside-box2-item">
                                <span className="home__aside-box2-icon">
                                    <PiNumberCircleOneFill/>
                                </span>
                                <span>
                                    Cảm hứng của ngày hôm nay
                                </span>
                            </div>
                            <div className="home__aside-box2-item">
                                <span className="home__aside-box2-icon">
                                    <PiNumberCircleTwoFill/>
                                </span>
                                <span>
                                    Bản tin thời sự hôm nay
                                </span>
                            </div>
                            <div className="home__aside-box2-item">
                            <span className="home__aside-box2-icon">
                                    <PiNumberCircleThreeFill/>
                                </span>
                                <span>
                                    Dự báo thời tiết
                                </span>
                            </div>
                            <div className="home__aside-box2-item">
                            <span className="home__aside-box2-icon">
                                    <PiNumberCircleFourFill/>
                                </span>
                                <span>
                                    Phim thịnh hành trong tuần q...
                                </span>
                            </div>
                            <div className="home__aside-box2-item">
                            <span className="home__aside-box2-icon">
                                    <PiNumberCircleFiveFill/>
                                </span>
                                <span>
                                    Bài hát được nghe nhiều nhất
                                </span>
                            </div>
                            <div className="home__aside-box2-item">
                            <span className="home__aside-box2-icon">
                                    <PiNumberCircleSixFill/>
                                </span>
                                <span>
                                    Top thịnh hành
                                </span>
                            </div>
                            <div className="home__aside-box2-item">
                            <span className="home__aside-box2-icon">
                                    <PiNumberCircleSevenFill/>
                                </span>
                                <span>
                                    Du lịch
                                </span>
                            </div>
                            <div className="home__aside-box2-item">
                            <span className="home__aside-box2-icon">
                                    <PiNumberCircleEightFill/>
                                </span>
                                <span>
                                    Lãi suất ngân hàng tăng mạn...
                                </span>
                            </div>
                            <div className="home__aside-box2-item">
                            <span className="home__aside-box2-icon">
                                    <PiNumberCircleNineFill/>
                                </span>
                                <span>
                                    Hoạt hình
                                </span>
                            </div>
                        </div>
                        <div className="home__aside-box3">
                            <div className="home__aside-box3-item">
                                <div>
                                    <div className="aside-box3-title">
                                        <span className="aside-box3-icon">
                                            <BsPhoneFlip/>
                                        </span>
                                        Thông tin & trợ giúp
                                    </div>
                                    <div className="aside-box3-nd">
                                        Dịch vụ  4000-960-960
                                        </div>
                                    <div className="aside-box3-title">
                                        <span className="aside-box3-icon">
                                            <BiGroup/>
                                        </span>
                                        Hợp tác & dịch vụ...
                                    </div>
                                    <div className="aside-box3-nd">Dịch vụ  4000-960-960</div>
                                    <div className="aside-box3-title">
                                        <span className="aside-box3-icon">
                                            <ImNotification/>
                                        </span>
                                        Trung tâm báo cáo
                                    </div>
                                    <div className="aside-box3-nd">Dịch vụ  4000-960-960</div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
            {active && <Header/>} 
        </>
     )

}

export default Home