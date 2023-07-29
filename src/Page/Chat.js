import "../Style/PageStyle/Chat.css"
import Header from "../Components/Header"
import ChatList from "../Components/ChatList"
function Chat() {
    return ( 
        <>
            <Header/>
            <div className="chat">
                <div className="chat__nav">Nav</div>
                <ChatList/>
                <div className="chat__main">main</div>

                <div className="chat__profile">profile</div>
            </div>
        </>
     );
}

export default Chat;