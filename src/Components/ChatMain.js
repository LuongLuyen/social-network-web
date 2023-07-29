import "../Style/ComponentStyle/ChatMain.css"
import Avata from "../assets/img/aaa.jpg"
import { AiFillPhone } from 'react-icons/ai'
import { FaVideo } from 'react-icons/fa'
import { FaList } from 'react-icons/fa'
import { MdInsertPhoto } from 'react-icons/md'
import { AiFillPlusCircle } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
function ChatMain() {
    return ( 
        <div className="chat__main">
            <div className="chat__main-header">
                <div className="chat__header">
                    <img className="chat__avt" alt="/"src={Avata}/>
                    <div className="chat__user">
                        <span className="chat__name">Nguyễn Văn A</span>
                        <span className="chat__d">Đang hoạt động</span>
                    </div>
                    <div className="chat__call">
                        <span className="chat__call-icon">
                            <AiFillPhone/>
                        </span>
                        <span className="chat__call-icon">
                            <FaVideo/>
                        </span>
                        <span className="chat__call-icon">
                            <FaList/>
                        </span>
                    </div>
                </div>
            </div>
            <div className="chat__main-content">
                content
            </div>
            <div className="chat__main-footer">
                <span className="chat__main-footer-item">
                    <AiFillPlusCircle/>
                </span>
                <span className="chat__main-footer-item">
                    <MdInsertPhoto/>
                </span>
                <span className="chat__footer-chat">
                    <input className="chat__footer-input" placeholder="Aa"/>
                    <span className="input__item">
                        <BsFillArrowRightCircleFill/>
                    </span>
                </span>
                <span className="chat__main-footer-item">
                    <AiFillHeart/>
                </span>
            </div>
        </div>
    )
}

export default ChatMain