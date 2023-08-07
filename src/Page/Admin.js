import {useEffect,useState} from 'react'
import axios from 'axios'
import Header from "../Components/Header"
import "../Style/PageStyle/Admin.css"
function Admin() {
   const [user,setUser] = useState([])
   useEffect(() => {
        axios.get('http://localhost:5000/admin-api/user/ADMIN')
        .then((res) => {
            setUser(res.data)
        })
    }, []) 
    return ( 
        <div>
            <Header/>
            <div className="admin">
                <div className="admin__table">
                    <table 
                        className="admin__table-list"
                        border="1">
                        <tbody>
                            <tr className="tr" >
                                <th className="admin__item">Id</th>
                                <th className="admin__item">Username</th>
                                <th className="admin__item">Password</th>
                                <th className="admin__item">Fullname</th>
                                <th className="admin__item">Email</th>
                                <th className="admin__item">Quyền</th>
                                <th className="admin__item">Sữa</th>
                                <th className="admin__item">Xóa</th>
                            </tr>
                            {user.map((item)=>(
                                <tr className="tr" key={item.id} >
                                    <th>{item.id}</th>
                                    <th>{item.userName}</th>
                                    <th>{item.password}</th>
                                    <th>{item.fullName}</th>
                                    <th>{item.email}</th>
                                    <th>{item.role}</th>
                                    <th className="admin__update">✎</th>
                                    <th className="admin__delete">✘</th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="admin__page">
                    <div className="admin__page-list">1</div>
                    <div className="admin__page-list">2</div>
                    <div className="admin__page-list">3</div>
                    <div className="admin__page-list">4</div>
                    <div className="admin__page-list">5</div>
                </div>
            </div>
        </div>
    )
}

export default Admin