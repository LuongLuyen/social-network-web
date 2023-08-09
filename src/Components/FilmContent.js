import Video from "../assets/Video/video.mp4"
import "../Style/ComponentStyle/FilmContent.css"
function FilmContent() {
    return ( 
        <div className="filmcontent">
           <video className="filmcontent__video" src={Video} controls/>
        </div>
     )
}

export default FilmContent