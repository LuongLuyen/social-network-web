import "../Style/PageStyle/Chat.css"
import Header from "../Components/Header"
import { BiSolidVideoPlus } from 'react-icons/bi'
import { HiPencilAlt } from 'react-icons/hi'
import Avata from "../assets/img/aaa.jpg"
function Chat() {
    return ( 
        <>
            <Header/>
            <div className="chat">
                <div className="chat__nav">Nav</div>
                <div className="chat__friend">
                    <div className="chat__friend-header">
                        <div className="chat__friend-title">Chat</div>
                        <div>
                            <span className="chat__friend-icon"><BiSolidVideoPlus/></span>
                            <span className="chat__friend-icon"><HiPencilAlt/></span>
                        </div>
                    </div>
                    <div className="chat__friend-user">
                        <img className="chat__friend-avt" alt="/" src ={Avata}/>
                        <div>
                            <div className="chat__friend-name">Nguyễn Văn A</div>
                            <div className="chat__friend-d">Bạn: toi la yasuo</div>
                        </div>
                    </div>
                    <div className="chat__friend-user">
                        <img className="chat__friend-avt" alt="/" src ={Avata}/>
                        <div>
                            <div className="chat__friend-name">Nguyễn Văn A</div>
                            <div className="chat__friend-d">Bạn: toi la yasuo</div>
                        </div>
                    </div>
                    <div className="chat__friend-user">
                        <img className="chat__friend-avt" alt="/" src ={Avata}/>
                        <div>
                            <div className="chat__friend-name">Nguyễn Văn A</div>
                            <div className="chat__friend-d">Bạn: toi la yasuo</div>
                        </div>
                    </div>
                    <div className="chat__friend-user">
                        <img className="chat__friend-avt" alt="/" src ={Avata}/>
                        <div>
                            <div className="chat__friend-name">Nguyễn Văn A</div>
                            <div className="chat__friend-d">Bạn: toi la yasuo</div>
                        </div>
                    </div>
                    <div className="chat__friend-user">
                        <img className="chat__friend-avt" alt="/" src ={Avata}/>
                        <div>
                            <div className="chat__friend-name">Nguyễn Văn A</div>
                            <div className="chat__friend-d">Bạn: toi la yasuo</div>
                        </div>
                    </div>
                    <div className="chat__friend-user">
                        <img className="chat__friend-avt" alt="/" src ={Avata}/>
                        <div>
                            <div className="chat__friend-name">Nguyễn Văn A</div>
                            <div className="chat__friend-d">Bạn: toi la yasuo</div>
                        </div>
                    </div>
                    <div className="chat__friend-user">
                        <img className="chat__friend-avt" alt="/" src ={Avata}/>
                        <div>
                            <div className="chat__friend-name">Nguyễn Văn A</div>
                            <div className="chat__friend-d">Bạn: toi la yasuo</div>
                        </div>
                    </div>
                    <div className="chat__friend-user">
                        <img className="chat__friend-avt" alt="/" src ={Avata}/>
                        <div>
                            <div className="chat__friend-name">Nguyễn Văn A</div>
                            <div className="chat__friend-d">Bạn: toi la yasuo</div>
                        </div>
                    </div>
                    <div className="chat__friend-user">
                        <img className="chat__friend-avt" alt="/" src ={Avata}/>
                        <div>
                            <div className="chat__friend-name">Nguyễn Văn A</div>
                            <div className="chat__friend-d">Bạn: toi la yasuo</div>
                        </div>
                    </div>
                    <div className="chat__friend-user">
                        <img className="chat__friend-avt" alt="/" src ={Avata}/>
                        <div>
                            <div className="chat__friend-name">Nguyễn Văn A</div>
                            <div className="chat__friend-d">Bạn: toi la yasuo</div>
                        </div>
                    </div>
                    <div className="chat__friend-user">
                        <img className="chat__friend-avt" alt="/" src ={Avata}/>
                        <div>
                            <div className="chat__friend-name">Nguyễn Văn A</div>
                            <div className="chat__friend-d">Bạn: toi la yasuo</div>
                        </div>
                    </div>
                </div>
                <div className="chat__main">main</div>
                <div className="chat__profile">profile</div>
            </div>
        </>
     );
}

export default Chat;