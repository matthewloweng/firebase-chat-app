import "./detail.css"
import { auth } from "../../lib/firebase"

const Detail = () => {
    return (
        <div className='detail'>
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h2>Jane Doe</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy & Help</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                {/* <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div> */}
                <div className="option">
                    <div className="title">
                        <span>Shared Photos</span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="data:image/jpeg;base64,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" alt="" />
                                <span>photo_2024_04.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="data:image/jpeg;base64,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" alt="" />
                                <span>photo_2024_04.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon"/>
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="data:image/jpeg;base64,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" alt="" />
                                <span>photo_2024_04.png</span>
                            </div>
                            <img src="./download.png" alt="" className="icon"/>
                        </div>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <button>Block User</button>
                <button className="logout" onClick={()=>auth.signOut()}>Logout</button>

            </div>
        </div>
    )
}

export default Detail