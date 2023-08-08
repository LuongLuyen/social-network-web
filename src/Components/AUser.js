import '../Style/ComponentStyle/AUser.css'
function AUser({props}) {
 
    return ( 
        <div className="user">
            <div className="user__table">
                <table 
                    className="user__table-list"
                    border="1">
                    <tbody>
                        <tr className="tr" >
                            <th className="user__item">Id</th>
                            <th className="user__item">Username</th>
                            <th className="user__item">Password</th>
                            <th className="user__item">Fullname</th>
                            <th className="user__item">Email</th>
                            <th className="user__item">Quyền</th>
                            <th className="user__item">Sữa</th>
                            <th className="user__item">Xóa</th>
                        </tr>
                        {props.map((item)=>(
                            <tr className="tr" key={item.id} >
                                <th>{item.id}</th>
                                <th>{item.userName}</th>
                                <th>{item.password}</th>
                                <th>{item.fullName}</th>
                                <th>{item.email}</th>
                                <th>{item.role}</th>
                                <th className="user__update">✎</th>
                                <th className="user__delete">✘</th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="user__page">
                <div className="user__page-list">1</div>
                <div className="user__page-list">2</div>
                <div className="user__page-list">3</div>
                <div className="user__page-list">4</div>
                <div className="user__page-list">5</div>
            </div>
        </div>
     )
}

export default AUser