import Header from "../Components/Header"
import '../Style/PageStyle/Introduce.css'
function Introduce() {
    return ( 
        <div>
            <Header/>
            <div className="content">
                <nav className="content__nav">
                    <div className="content__nav-item">
                        <div className="content__nav-btn">Phổ biến</div>
                    </div>
                    <div className="content__nav-item">
                        <div className="content__nav-btn">Giáo dục</div>
                    </div>
                    <div className="content__nav-item">
                        <div className="content__nav-btn">Phim</div>
                    </div>
                    <div className="content__nav-item">
                        <div className="content__nav-btn">Sắc đẹp</div>
                    </div>
                    <div className="content__nav-item">
                        <div className="content__nav-btn">Giải trí</div>
                    </div>
                    <div className="content__nav-item">
                        <div className="content__nav-btn">Nghệ thuật</div>
                    </div>
                    <div className="content__nav-item">
                        <div className="content__nav-btn">Game</div>
                    </div>
                </nav>
                <article className="content__article">
                    <div className="content__article-swiper">
                        swiper
                    </div>
                    <div className="content__article-main">
                        main
                    </div>
                    <div className="content__article-main">
                        main
                    </div>
                </article>
                <aside className="content__aside">
                    <div className="content__aside-login">
                        login
                    </div>
                    <div className="content__aside-hot">
                        hot
                    </div>
                </aside>
            </div>
        </div>
     );
}

export default Introduce;