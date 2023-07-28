import "../Style/ComponentStyle/FilmContent.css"
import Video from "../assets/Video/video.mp4"
function FilmContent() {
    return ( 
        <div className="filmcontent">
           <video className="filmcontent__video" src={Video} controls/>
        </div>
     );
}

export default FilmContent;