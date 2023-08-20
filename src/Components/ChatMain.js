import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { AiFillPlusCircle } from 'react-icons/ai'
import { MdInsertPhoto } from 'react-icons/md'
import { AiFillPhone } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'
import { FaVideo } from 'react-icons/fa'
import { FaList } from 'react-icons/fa'
import Avata from "../assets/img/aaa.jpg"
import "../Style/ComponentStyle/ChatMain.css"
function ChatMain({props}) {

    return ( 
        <div className="chat__main">
            <div className="chat__main-header">
                <div className="chat__header">
                    <img className="chat__avt" alt="/"src={Avata}/>
                    <div className="chat__user">
                        <span className="chat__name">{props}</span>
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
                <div className="other__chat">
                    <img className="other__chat-avt" alt="/" src={Avata}/>
                    <div className="other__chat-nd">
                        <span className='other__chat-nd-item'>
                            Đây là nội dung tin nhắn của người khác
                        </span>
                    </div>
                </div>
                <div className="other__chat">
                    <img className="other__chat-avt" alt="/" src={Avata}/>
                    <div className="other__chat-nd">
                        <span className='other__chat-nd-item'>
                            Đây là nội dung tin nhắn của người khác
                        </span>
                    </div>
                </div>

                <div className="you__chat">
                    <span className="you__chat-item">
                        Đây là tin nhắn của tôi
                    </span>
                </div>
                <div className="you__chat">
                    <span className="you__chat-item">
                        Đây là tin nhắn của tôi
                    </span>
                </div>
              
                <div className="other__chat">
                    <img className="other__chat-avt" alt="/" src={Avata}/>
                    <div className="other__chat-nd">
                        <span className='other__chat-nd-item'>
                            Đây là nội dung tin nhắn của người khác
                        </span>
                    </div>
                </div>
                <div className="you__chat">
                    <span className="you__chat-item">
                        Đây là tin nhắn của tôi
                    </span>
                </div>
                <div className="you__chat">
                    <span className="you__chat-item">
                        Đây là tin nhắn của tôi
                    </span>
                </div>
                <div className="you__chat">
                    <span className="you__chat-item">
                        Đây là tin nhắn của tôi
                    </span>
                </div>
                <div className="other__chat">
                    <img className="other__chat-avt" alt="/" src={Avata}/>
                    <div className="other__chat-nd">
                        <span className='other__chat-nd-item'>
                            Đây là nội dung tin nhắn của người khác
                        </span>
                    </div>
                </div>
                <div className="you__chat">
                    <span className="you__chat-item">
                        Đây là tin nhắn của tôi test xem chiều dài tối đa bao nhiêu
                    </span>
                </div>
                <div className="other__chat">
                    <img className="other__chat-avt" alt="/" src={Avata}/>
                    <div className="other__chat-nd">
                        <span className='other__chat-nd-item'>
                            Đây là nội dung tin nhắn của người khác
                        </span>
                    </div>
                </div>
                <div className="other__chat">
                    <img className="other__chat-avt" alt="/" src={Avata}/>
                    <div className="other__chat-nd">
                        <span className='other__chat-nd-item'>
                            Đây là nội dung tin nhắn của người khác
                        </span>
                    </div>
                </div>
                <div className="other__chat">
                    <img className="other__chat-avt" alt="/" src={Avata}/>
                    <div className="other__chat-nd">
                        <span className='other__chat-nd-item'>
                            Đây là nội dung tin nhắn của người khác
                        </span>
                    </div>
                </div>
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