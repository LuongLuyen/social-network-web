import { useSelector } from "react-redux"
import {fetchFilmSelector} from '../redux/selectors'
import "../Style/ComponentStyle/FilmItem.css"
function FilmItem() {
    const filmStore = useSelector(fetchFilmSelector)
    return ( 
        <div className="video__main">
            {filmStore.map((item, index)=>(
                <div key={index} className="video__main-item">
                    <img className="video__item" alt="/" src={item.content}/>
                    <div className="video-title">{item.title}</div>
                    <div className="video__user">
                        <img className="video__avata" alt="/"src= {item.avatarUrl}/>
                        <span>
                            <div className="video__user-name">{item.fullName}</div>
                            <div className="video__user-name">17 lượt xem• 5 giờ trước</div>
                        </span>
                    </div>
                </div>
            ))}
        </div>
     )
}

export default FilmItem