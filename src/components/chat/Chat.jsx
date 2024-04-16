import "./chat.css"
import EmojiPicker from "emoji-picker-react"
import { useState } from "react"

const Chat = () => {
    const [open,setOpen] = useState(false);
    const [text,setText] = useState("");

    const handleEmoji = e => {
        setText((prev)=>prev+e.emoji);
        setOpen(false)
    }

    console.log(text)
    return (
        <div className='chat'>
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>Jane Doe</span>
                        <p>Lorem ipsum dolor, sit amet. </p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />
                </div>
            </div>
            <div className="center">
                <div className="message own">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p> Lorem ipsum dolor sit amet consectetur

                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p> Lorem ipsum dolor sit amet consectetur

                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p> Lorem ipsum dolor sit amet consectetur

                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p> Lorem ipsum dolor sit amet consectetur

                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <img src="data:image/jpeg;base64,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" alt="" />
                        <p> Lorem ipsum dolor sit amet consectetur

                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                <input 
                    type="text" 
                    placeholder="Type a message..." 
                    value={text}
                    onChange={e=>setText(e.target.value)} 
                />
                <div className="emoji">
                    <img 
                        src="./emoji.png" 
                        alt=""
                        onClick={()=>setOpen(prev=>!prev)}
                    />
                    <div className="picker">
                        <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
                    </div>
                </div>
                <button className="sendButton">Send</button>
            </div>
        </div>
    )
}

export default Chat