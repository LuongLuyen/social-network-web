import "../Style/ComponentStyle/HomeContent.css"
import Img from "../assets/img/aaa.jpg"
import Bg from "../assets/img/anhnen.jpg"
import { AiFillLike } from 'react-icons/ai'
import { FaComments } from 'react-icons/fa'
import { FaShareAltSquare } from 'react-icons/fa'
function HomeContent() {
    return ( 
        <div className="home-content">
            <div className="home-content-header">
                <img className="home-content-avt" alt="img" src= {Img}/>
                <span className="home-content-user">
                    <div className="home-content-name">
                        Nguyễn Văn A
                        <span className="home-content-follow">
                            Theo dõi
                        </span>
                    </div>
                    <div className="home-content-d">
                        22-7 19:439,405 triệu người đã theo dõi anh ấy
                    </div>
                </span>
            </div>
            <div className="home-content-nd">
                Triết học là bộ môn nghiên cứu về những vấn đề chung và cơ bản của con người, 
                thế giới quan và vị trí của con người trong thế giới quan, những vấn đề có kết 
                nối với chân lý, sự tồn tại, kiến thức, giá trị, quy luật, ý thức, và ngôn ngữ. 
            </div>
            <img className="home-content-bg" alt="bg" src= {Bg}/>
            <div className="home-content-quantity">
                <span>100</span>
                <span>100</span>
                <span>100</span>
            </div>
            <div className="home-content-action">
                <div className="home-btn">
                    <span className="home-icon">
                        <AiFillLike/>
                    </span>
                    <span>Like</span>
                </div>
                <div className="home-btn">
                    <span className="home-icon">
                        <FaComments/>
                    </span>
                    <span>
                        Comment
                    </span>
                </div>
                <div className="home-btn">
                    <span className="home-icon">
                        <FaShareAltSquare/>
                    </span>
                    <span>
                        Share
                    </span>
                </div>
            </div>
        </div>
     )
}

export default HomeContent;