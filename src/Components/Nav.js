import "../Style/ComponentStyle/Nav.css"
import { FaBlog } from 'react-icons/fa'
import { BiSolidNews } from 'react-icons/bi'
import { SiRiotgames } from 'react-icons/si'
import { MdTopic } from 'react-icons/md'
import { PiFilmReelFill } from 'react-icons/pi'
function Nav() {
    return ( 
        <nav className="home__nav">
            <h2 className="home__nav-title">Danh mục</h2>
            <div className="home__nav-item">
                <span className="home__nav-icon">
                   <FaBlog/>
                </span>
                <span>
                    Bài viết phổ biến
                </span>
            </div>
            <div className="home__nav-item">
                <span className="home__nav-icon">
                   <BiSolidNews/>
                </span>
                <span>
                    Danh sách tin tức
                </span>
            </div>
            <div className="home__nav-item">
                <span className="home__nav-icon">
                   <SiRiotgames/>
                </span>
                <span>
                   Danh sách giải trí
                </span>
            </div>
            <div className="home__nav-item">
                <span className="home__nav-icon">
                   <MdTopic/>
                </span>
                <span>
                   Danh sách chủ đề
                </span>
            </div>
            <div className="home__nav-item">
                <span className="home__nav-icon">
                   <PiFilmReelFill/>
                </span>
                <span>
                    Danh sách phim
                </span>
            </div>
        </nav>
     );
}

export default Nav;