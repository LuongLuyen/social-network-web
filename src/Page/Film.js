import Header from "../Components/Header"
import Img from "../assets/img/film.jpg"
import FilmItem from "../Components/FilmItem"
import { BiGroup } from 'react-icons/bi'
import { FaVideo } from 'react-icons/fa'
import { IoIosPeople } from 'react-icons/io'
import { RiUserFollowFill } from 'react-icons/ri'
import { PiClockCounterClockwiseFill } from 'react-icons/pi'
import { PiListNumbersDuotone } from 'react-icons/pi'
import { GiCampCookingPot } from 'react-icons/gi'
import { SiRiotgames } from 'react-icons/si'
import { BiSolidFilm } from 'react-icons/bi'

import "../Style/PageStyle/Film.css"
function Film() {
    return ( 
        <div>
            <Header/>
            <main className="video">
                <nav className="video__nav">
                    <div className="video__nav-box1">
                        <div className="video__nav-box1-title">Băng hình</div>
                        <div className="video__nav-box1-item">
                            <span className="video__nav-box1-icon">
                                <FaVideo/>
                            </span>
                            <span className="video__nav-box1-nd">
                                Gợi ý
                            </span>
                        </div>
                        <div className="video__nav-box1-item">
                            <span className="video__nav-box1-icon">
                                <RiUserFollowFill/>
                            </span>
                            <span className="video__nav-box1-nd">
                                Theo dõi
                            </span>
                        </div>
                        <div className="video__nav-box1-item">
                            <span className="video__nav-box1-icon">
                                <PiListNumbersDuotone/>
                            </span>
                            <span className="video__nav-box1-nd">
                                Số video
                            </span>
                        </div>
                    </div>
                    <div className="video__nav-box2">
                        <div className=" video__nav-box2-title">Của tôi</div>
                        <div className="video__nav-box1-item">
                            <span className="video__nav-box1-icon">
                                <BiGroup/>
                            </span>
                            <span className="video__nav-box1-nd">
                                Hồ sơ
                            </span>
                        </div>
                        <div className="video__nav-box1-item">
                            <span className="video__nav-box1-icon">
                                <PiClockCounterClockwiseFill/>
                            </span>
                            <span className="video__nav-box1-nd">
                                Lịch sử xem
                            </span>
                        </div>
                    </div>
                    <div className="video__nav-box3">
                        <div className=" video__nav-box2-title">
                            Kênh nổi bật
                        </div>
                        <div className="video__nav-box1-item">
                            <span className="video__nav-box1-icon">
                                <GiCampCookingPot/>
                            </span>
                            <span className="video__nav-box1-nd">
                                Nấu ăn
                            </span>
                        </div>
                        <div className="video__nav-box1-item">
                            <span className="video__nav-box1-icon">
                                <SiRiotgames/>
                            </span>
                            <span className="video__nav-box1-nd">
                                Game
                            </span>
                        </div>
                        <div className="video__nav-box1-item">
                            <span className="video__nav-box1-icon">
                                <IoIosPeople/>
                            </span>
                            <span className="video__nav-box1-nd">
                                Giải trí
                            </span>
                        </div>
                        <div className="video__nav-box1-item">
                            <span className="video__nav-box1-icon">
                                <BiSolidFilm/>
                            </span>
                            <span className="video__nav-box1-nd">
                                Phim
                            </span>
                        </div>
                    </div>
                </nav>
                <div className="video__content">
                    {/* <VideoContent/> */}
                    <img className="video__swipe" alt="film" src={Img}/>
                    <div className="video__title">
                        Video được đề xuất
                    </div>
                    <FilmItem/>
                </div>
            </main>
        </div>
     );
}

export default Film;