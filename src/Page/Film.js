import Header from "../Components/Header"
import Img from "../assets/img/film.jpg"
import FilmItem from "../Components/FilmItem"

import "../Style/PageStyle/Film.css"
function Film() {
    return ( 
        <div>
            <Header/>
            <main className="video">
                <nav className="video__nav">
                    nav
                </nav>
                <div className="video__content">
                    {/* <VideoContent/> */}
                    <img className="video__swipe" alt="film" src={Img}/>
                    <div className="video__title">
                        Video được đề xuất
                    </div>
                    <FilmItem/>
                </div>
            </main>
        </div>
     );
}

export default Film;