import '../Style/ComponentStyle/CreateUser.css'
function CreateUser({props}) {
    return (  
        <div className="create__user">
        <h4>Thông tin đăng ký</h4>
        <div>Tên đăng nhập: {props.userName}</div>
        <div>Mật khẩu: {props.password}</div>
        <div>Loại tài khoản: {props.role}</div>
    </div>
    )
}

export default CreateUser