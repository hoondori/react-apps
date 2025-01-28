import { dbService } from "../fbase";
import { useState } from "react";

/*
    한 트윗에 대해서 화면에 표시한다. 
    트윗 작성자라면 삭제와 수정이 가능하다. 

*/
const Nweet = ({nweetObj, isOwner}) => {

    // 수정 진행 여부: edit 버튼 클릭시, submit시 true, cancel이나 submit 후 false
    const [editing, setEditing] = useState(false); 

    // 수정된 내용
    const [newNweet, setNewNweet] = useState(nweetObj.text); 

    // 트윗 삭제 버튼 누를 때 사용자에게 되묻고 firebase 데이터 삭제 진행
    const onDeleteClick = async () => {
        const ok = window.confirm("정말 삭제할 생각?");
        if (ok) {
            const data = await dbService.doc(`nweets/${nweetObj.id}`).delete();
        }
    }

    // 트윗 수정 버튼 클릭시 수정 상태 진입
    // 수정 후 "확인" 혹은 "취소"를 누르면 수정이 완료된 상태로 변경
    const toggleEditing = () => setEditing((prev) => !prev);

    // 트윗 수정 input text 변화 반영
    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setNewNweet(value);
    }

    // 투윗 수정 input text 를 submit해서 firebase에 반영
    const onSubmit = async (event) => {
        event.preventDefault();
        console.log(nweetObj.id, newNweet);
        await dbService.doc( `nweets/${nweetObj.id}`).update({text: newNweet});
        setEditing(false);
    }

    // 수정 상태면 수정 관련 랜더링이 되고 아니라면 트윗과 수정/삭제 버튼이 랜더링
    return (  
        <div>
            {editing ?(
                <>
                    <form onSubmit={onSubmit}>
                        <input onChange={onChange} value={newNweet} required/>
                        <input type="submit" value="Update Nweet" />
                    </form>
                    <button onClick={toggleEditing}>Cancel</button>
                </>
            ) : (
                <>
                <h4>{nweetObj.text}</h4>
                {nweetObj.attachmentUrl &&(
                    <img src={nweetObj.attachmentUrl} widht="50px" height="50px" />
                )}
                {isOwner && (
                    <>
                        <button onClick={onDeleteClick}>Delete Nweet</button>
                        <button onClick={toggleEditing}>Edit Nweet</button>
                    </>
                )}
                </>
            )}
        </div>
    );
}
 
export default Nweet;