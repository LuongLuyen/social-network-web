import { AiFillLike } from 'react-icons/ai'
import { FaComments } from 'react-icons/fa'
import { FaShareAltSquare } from 'react-icons/fa'
import { useSelector } from "react-redux"
import {fetchPostSelector} from '../redux/selectors'
import "../Style/ComponentStyle/HomeContent.css"
function HomeContent() {
    const postStore = useSelector(fetchPostSelector)
    return ( 
        <div className="home-content">
            {postStore.map((item,index) => (
            <div className="home-content-list" key={index}>
                <div className="home-content-header">
                    <img className="home-content-avt" alt="img" src= {item.avatarUrl}/>
                    <span className="home-content-user">
                        <div className="home-content-name">
                            {item.fullName}
                            <span className="home-content-follow">
                                Theo dõi
                            </span>
                        </div>
                        <div className="home-content-d">
                            22-7 19:439,405 triệu người đã theo dõi anh ấy
                        </div>
                    </span>
                </div>
                <div className="home-content-nd">
                    {item.content}
                </div>
                <img className="home-content-bg" alt="bg" src= {item.contentUrl}/>
                <div className="home-content-quantity">
                    <span>{item.likeCount}</span>
                    <span>{item.commentCount}</span>
                    <span>{item.shareCount}</span>
                </div>
                <div className="home-content-action">
                    <div className="home-btn">
                        <span className="home-icon">
                            <AiFillLike/>
                        </span>
                        <span>Like</span>
                    </div>
                    <div className="home-btn">
                        <span className="home-icon">
                            <FaComments/>
                        </span>
                        <span>
                            Comment
                        </span>
                    </div>
                    <div className="home-btn">
                        <span className="home-icon">
                            <FaShareAltSquare/>
                        </span>
                        <span>
                            Share
                        </span>
                    </div>
                </div>
            </div>
        ))}
        </div>
    )
}

export default HomeContent