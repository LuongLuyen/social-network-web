import "../Style/PageStyle/Chat.css"
import Header from "../Components/Header"
import ChatList from "../Components/ChatList"
import { BsMessenger } from 'react-icons/bs'
import { BsPeopleFill } from 'react-icons/bs'
import Avata from "../assets/img/aaa.jpg"
function Chat() {
    return ( 
        <>
            <Header/>
            <div className="chat">
                <div className="chat__nav">
                    <div className="chat__nav-header">
                        <div className="chat__nav-icon">
                            <BsMessenger/>
                        </div>
                        <div className="chat__nav-icon">
                            <BsPeopleFill/>
                        </div>
                    </div>
                    <img className="chat__nav-user" alt="/"src={Avata}/>
                </div>
                <ChatList/>
                <div className="chat__main">main</div>

                <div className="chat__profile">profile</div>
            </div>
        </>
     )
}

export default Chat