import Earth from "../Components/Earth"
import "../Style/PageStyle/Home.css"
function Home() {
    return ( 
        <div>
            <Earth/>
            <div className="homecontent">
                {/* component nav */}
                <nav className="home__nav">nav</nav>

                <article className="home__article">
                    <section>
                        <div className="home__article-box1">
                            box1
                        </div>
                        <div className="home__article-box2">
                            box2
                        </div>
                    </section>
                    {/* component box3 */}
                    <div className="home__article-box3">
                        article
                    </div>
                </article>

                <aside className="home__aside">
                    <div className="home__aside-box1">
                        box1
                    </div>
                    <div className="home__aside-box2">
                        Tìm kiếm nhiều nhất
                        <div className="home__aside-box2-item">
                            1 Cảm hứng của ngày...
                        </div>
                        <div className="home__aside-box2-item">
                            2 Cảm hứng của ngày...
                        </div>
                        <div className="home__aside-box2-item">
                            3 Cảm hứng của ngày...
                        </div>
                        <div className="home__aside-box2-item">
                            4 Cảm hứng của ngày...
                        </div>
                        <div className="home__aside-box2-item">
                            5 Cảm hứng của ngày...
                        </div>
                        <div className="home__aside-box2-item">
                            6 Cảm hứng của ngày...
                        </div>
                        <div className="home__aside-box2-item">
                            7 Cảm hứng của ngày...
                        </div>
                        <div className="home__aside-box2-item">
                            8 Cảm hứng của ngày...
                        </div>
                    </div>
                    <div className="home__aside-box3">
                        box3
                    </div>
                </aside>
            </div>
        </div>
     );
}

export default Home;