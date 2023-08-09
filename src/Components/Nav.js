import { FaBlog } from 'react-icons/fa'
import { BiSolidNews } from 'react-icons/bi'
import { SiRiotgames } from 'react-icons/si'
import { MdTopic } from 'react-icons/md'
import { PiFilmReelFill } from 'react-icons/pi'
import "../Style/ComponentStyle/Nav.css"
function Nav() {
    return ( 
        <nav className="home__nav">
            <h2 className="home__nav-title">Danh mục</h2>
            <div className="home__nav-item">
                <span className="home__nav-icon">
                   <FaBlog/>
                </span>
                <span>
                    Bài viết phổ bi...
                </span>
            </div>
            <div className="home__nav-item">
                <span className="home__nav-icon">
                   <BiSolidNews/>
                </span>
                <span>
                    Danh sách tin...
                </span>
            </div>
            <div className="home__nav-item">
                <span className="home__nav-icon">
                   <SiRiotgames/>
                </span>
                <span>
                   Danh sách giả...
                </span>
            </div>
            <div className="home__nav-item">
                <span className="home__nav-icon">
                   <MdTopic/>
                </span>
                <span>
                   Danh sách ch...
                </span>
            </div>
            <div className="home__nav-item">
                <span className="home__nav-icon">
                   <PiFilmReelFill/>
                </span>
                <span>
                    Danh sách phi...
                </span>
            </div>
        </nav>
     )
}

export default Nav