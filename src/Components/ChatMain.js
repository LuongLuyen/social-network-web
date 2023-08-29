import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { AiFillPlusCircle } from 'react-icons/ai'
import { MdInsertPhoto } from 'react-icons/md'
import { AiFillPhone } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'
import { FaVideo } from 'react-icons/fa'
import { FaList } from 'react-icons/fa'
import Avata from "../assets/img/aaa.jpg"
import { useDispatch, useSelector} from 'react-redux'
import {fetchMessUser} from '../redux/Slice/chatSlice'
import {messSelector} from '../redux/selectors'
import "../Style/ComponentStyle/ChatMain.css"
import { useEffect, useState } from 'react'
function ChatMain({props}) {
    const [mes,setMes]= useState([])

    const [localData, setLocalData] = useState(null)
    const [role, setRole] = useState(null)
    useEffect(() => {
        const data = JSON.parse(sessionStorage.getItem('localData'))
        const dataRole = JSON.parse(sessionStorage.getItem('role'))
        if (data && dataRole) {
            setLocalData(data)
            setRole(dataRole)
        }
    },[])

    const messByGroupId = useSelector(messSelector)
    useEffect(()=>{
        if(messByGroupId !== undefined){
            setMes(messByGroupId)
        }
    },[messByGroupId])
    const dispatch = useDispatch()
    const id =2
    const sendIdUserMess = ()=>{
        dispatch(fetchMessUser({id}))
    }
    const checkMess = (i)=>{
        if(i.userName === localData ){
            return (
                <div className="you__chat">
                    <span className="you__chat-item">
                        {i.content}
                    </span>
               </div>
            )
        }else {
            return (
                <>
                    <img className="other__chat-avt" alt="/" src={i.avatarUrl}/>
                    <div className="other__chat-nd">
                        <span className='other__chat-nd-item'>
                        {i.content}
                        </span>
                    </div>
                </>
            )
        }
    }

    return ( 
        <div className="chat__main">
            <div className="chat__main-header">
                <div className="chat__header">
                    <img className="chat__avt" alt="/"src={Avata}/>
                    <div className="chat__user">
                        <span className="chat__name">{props}</span>
                        <span onClick={sendIdUserMess} className="chat__d">Đang hoạt động</span>
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
                {mes.map((i,index)=>(
                    <div key={index} className="other__chat">
                        {checkMess(i)}
                    </div>
                ))} 
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