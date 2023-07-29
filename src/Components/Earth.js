import Video from "../assets/Video/videobg.mp4"
import { CiSearch } from 'react-icons/ci'
import "../Style/ComponentStyle/Earth.css"
function Earth() {
    return ( 
        <div>
           <video className="earth__video" src={Video} autoPlay/>
           <div className="earth__search">
                <h1 className="earth__logo">
                    Logo
                </h1>
                <div>
                    <input className="earth__input" placeholder="Tìm kiếm"/>
                    <span className="earth__icon">
                        <CiSearch/>
                    </span>
                </div>
           </div>
        </div>
     )
}

export default Earth