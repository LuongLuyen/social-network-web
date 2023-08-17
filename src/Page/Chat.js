import { BsMessenger } from 'react-icons/bs'
import { BsPeopleFill } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineNotifications } from 'react-icons/md'
import { BiSearchAlt } from 'react-icons/bi'
import { useDispatch} from 'react-redux'
import {fetchChatUser} from '../redux/Slice/chatSlice'
import Header from "../Components/Header"
import ChatMain from "../Components/ChatMain"
import ChatList from "../Components/ChatList"
import Avata from "../assets/img/aaa.jpg"
import "../Style/PageStyle/Chat.css"
import { useState, useEffect } from "react"
function Chat() {

    const [localData, setLocalData] = useState(null)
    const [role, setRole] = useState(null)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchChatUser())
        const data = JSON.parse(sessionStorage.getItem('localData'))
        const dataRole = JSON.parse(sessionStorage.getItem('role'))
        if (data && dataRole) {
            setLocalData(data)
            setRole(dataRole)
        }
    },[dispatch])


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
                <ChatMain props ={localData}/>
                <div className="chat__profile">
                    <div className="chat__profile-user">
                        <img className="chat__profile-avt" alt="/" src= {Avata}/>
                        <div className="chat__profile-name">{localData}</div>
                        <div className="chat__profile-active">Đang hoạt động</div>
                    </div>
                    <div>
                        <span className="chat__profile-icon">
                            <CgProfile/>
                        </span>
                        <span className="chat__profile-icon">
                            <MdOutlineNotifications/>
                        </span>
                        <span className="chat__profile-icon">
                            <BiSearchAlt/>
                        </span>
                    </div>
                    <div className="Chat__profile-f">
                        <div className="Chat__profile-function">Thông tin về đoạn chat</div>
                        <div className="Chat__profile-function">Tùy chỉnh đoạn chat</div>
                        <div className="Chat__profile-function">File phương tiện, file và liên kết</div>
                        <div className="Chat__profile-function">Quyền riêng tư & hỗ trợ</div>
                    </div>
                </div>
            </div>
        </>
     )
}

export default Chat