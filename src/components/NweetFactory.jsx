import { useState } from "react";
import { dbService } from "@/fbase";
import { storageService } from "@/fbase";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";


const NweetFactory = ({userObj}) => {
    const [nweet, setNweet] = useState("");   // 현재 트웟
    const [attachment, setAttachment] = useState(""); // 첨부파일

    // 현재 트윗 전송: firebase에 저장, 현재 트윗 초기화
    const onSubmit = async (event) => {
        event.preventDefault();
        if (nweet === "") { // 빈 공백 트윗은 전송하지 않음
            return;
        }

        let attachmentUrl = "";
        if (attachment !== "") {
            // 현재 선택된 파일을 firebase storage에 저장하고 download url확보
            // const attachmentRef = storageService.ref().child(`${userObj.uid}/${uuidv4()}`);
            // const response = await attachmentRef.putString(attachment, "data_url");
            // const attachmentUrl = await response.ref.getDownloadURL();
            attachmentUrl = "fake download url"
        } 

        await dbService.collection("nweets").add({
            text: nweet,
            createdAt: Date.now(),
            creatorId: userObj.uid,
            attachmentUrl,
        });

        setNweet(""); // default to empty string
        setAttachment(""); // default to empty string
    }

    const onChange = (event) => {
        event.preventDefault();
        const {
            target: { value },
        } = event;
        setNweet(value);
    }

    // 파일 선택 후 data url로 읽어서 attachment에 설정
    const onFileChange = (event) => {
        const {
            target: { files },
        } = event;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            const {
                currentTarget: { result },
            } = finishedEvent;
            setAttachment(result);
        }
        reader.readAsDataURL(theFile);
    }

    // 파일 선택 취소
    const onClearAttachment = () => setAttachment("");

    return (  
        <form onSubmit={onSubmit} className="factoryForm">
            <div className="factoryInput__container">
                <input 
                    className="factoryInput__input"
                    type="text"
                    placeholder="What's on your mind?"
                    maxLength={120}
                    value={nweet}
                    onChange={onChange}
                />
                <input type="submit" value="&rarr;" className="factoryInput__arrow" />
            </div>
            <label htmlFor="attach-file" className="factoryInput__label">
                <span>Add photos</span>
                <FontAwesomeIcon icon={faPlus} />
            </label>
            <input 
                id="attach-file" 
                type="file" 
                accept="image/*" 
                onChange={onFileChange}
                style={{opacity:0,}}
                />
            
            {attachment && (
                <div className="factoryForm__attachment">
                    <img 
                        src={attachment} 
                        style={{
                            backgroundImage: attachment
                        }}
                    />
                    <div className="factoryForm_clear"onClick={onClearAttachment}>
                        <span>Remove</span>
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                </div>
            )}                
        </form>        
    );
}
 
export default NweetFactory;