import { BiSolidVideoPlus } from 'react-icons/bi'
import { HiPencilAlt } from 'react-icons/hi'
import { useSelector } from "react-redux"
import {userChatSelector} from '../redux/selectors'
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import {fetchUser} from '../redux/Slice/adminSlice'
import "../Style/ComponentStyle/ChatList.css"
function ChatList() {
    const userStore = useSelector(userChatSelector)

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchUser())
    },[dispatch])
    return ( 
        <div className="chat__list">
            <div className="chat__list-header">
                <div className="chat__list-title">Chat</div>
                <div>
                    <span className="chat__list-icon"><BiSolidVideoPlus/></span>
                    <span className="chat__list-icon"><HiPencilAlt/></span>
                </div>
            </div>
            {userStore.map((item, index)=>(
                <div key={index} className="chat__list-user">
                    <img className="chat__list-avt" alt="Avt" src ={item.avatarUrl}/>
                    <div className="chat__list-named">
                        <div className="chat__list-name">{item.fullName}</div>
                        <div className="chat__list-d">Bạn: toi la yasuo</div>
                    </div>
                </div>
            ))}
        </div>
     )
}

export default ChatList