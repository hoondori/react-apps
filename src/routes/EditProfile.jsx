import { authService, dbService } from "@/fbase.jsx"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import Nweet from "@components/Nweet";
import { updateProfile } from "firebase/auth"


const EditProfile = ({ userObj, refreshUser }) => {
    const navigate = useNavigate();
    const [nweets, setNweets] = useState([]); // 트윗 목록
    const [newDisplayName, setNewDisplayName] = useState(""); // 출력용 이름

    const onLogoutClick = () => {
        authService.signOut();
        navigate("/");  // 로그 아웃 후 Home으로 이동
    }

    // 내 트윗 보여주기
    const getMyNweets = async () => {
        const nweets = await dbService
            .collection("nweets")
            .where("creatorId", "==", userObj.uid)
            .orderBy("createdAt", "asc")
            .get();

        const newArray = nweets.docs.map((document)=>({
            id: document.id, ...document.data(),
        }));
        setNweets(newArray);
    };

    useEffect(() => {
        getMyNweets();
    }, []);

    // 출력용 이름 설정
    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setNewDisplayName(value);
    }

    // 출력용 이름 제출
    const onSubmit = async (event) => {
        event.preventDefault();
        if (userObj.displayName !== newDisplayName) { // 기존과 다를때만
            await updateProfile(userObj, {displayName: newDisplayName});
            refreshUser();
        }
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input 
                    onChange={onChange}
                    value={newDisplayName}
                    type="text" 
                    placeholder="Display Name" 
                />
                <input type="submit" placeholder="Update Profile" />
            </form>
            <button onClick={onLogoutClick}>Log Out</button>
            <div>
                {nweets.map((nweet) => (
                    <Nweet 
                        key={nweet.id} 
                        nweetObj={nweet} 
                        isOwner={true} />
                ))}
            </div>            
        </>
    );
};

export default EditProfile;
