import {useEffect,useState} from 'react'
import axios from 'axios'
import Header from "../Components/Header"
import AUser from "../Components/AUser"
import "../Style/PageStyle/Admin.css"
import { useDispatch, useSelector } from "react-redux"
import adminSlice from '../redux/Slice/adminSlice'
import {fetchDataSelector} from '../redux/selectors'
function Admin() {
   const [user,setUser] = useState([])
   const [check,setCheck] = useState(false)
   const domain = 'http://localhost:5000'

   useEffect(() => {
       axios.get(`${domain}/admin-api/user/ADMIN`)
       .then((res) => {
           setUser(res.data)
       })
       .catch((err) => {
           console.log(err)
       })
   }, []) 

   const dispatch = useDispatch()
   const getData =()=> {
        dispatch(adminSlice.actions.addUser(user))
        setCheck(true)
   }

   const userStore = useSelector(fetchDataSelector)

    return ( 
        <div>
            <Header/>
            <div className='main'>
                <nav className='main__nav'>
                    <h1 className='main__nav-title'>Quản lý</h1>
                    <div onClick={getData} className='main__nav-list'>Quản lý người dùng</div>
                    <div className='main__nav-list'>Quản lý bài viết</div>
                    <div className='main__nav-list'>Quản lý phim</div>
                    <div className='main__nav-list'>Quản lý tin nhắn</div>
                </nav>
                <div className='main__content'>
                    <h1 className='main__nav-title'>Nội dung</h1>
                    {check &&<AUser props={userStore}/>}
                </div>
            </div>
        </div>
    )
}

export default Admin