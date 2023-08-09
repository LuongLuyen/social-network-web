import {useEffect} from 'react'
import Header from "../Components/Header"
import AUser from "../Components/AUser"
import "../Style/PageStyle/Admin.css"
import { useDispatch, useSelector } from "react-redux"
import adminSlice from '../redux/Slice/adminSlice'
import {fetchUser} from '../redux/Slice/adminSlice'
import {fetchDataSelector} from '../redux/selectors'
function Admin() {
    const userStore = useSelector(fetchDataSelector)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUser())
    }, []) 

   const getData =()=> {
        dispatch(adminSlice.actions.addUser({
            data:'test'
        }))
   }
    return ( 
        <div>
            <Header/>
            <div className='main'>
                <nav className='main__nav'>
                    <h1 className='main__nav-title'>Quản lý</h1>
                    <div className='main__nav-list'>Quản lý người dùng</div>
                    <div className='main__nav-list'>Quản lý bài viết</div>
                    <div className='main__nav-list'>Quản lý phim</div>
                    <div className='main__nav-list'>Quản lý tin nhắn</div>
                </nav>
                <div className='main__content'>
                    <h1 className='main__nav-title'>Nội dung</h1>
                    {userStore &&<AUser props={userStore}/>}
                </div>
            </div>
        </div>
    )
}

export default Admin