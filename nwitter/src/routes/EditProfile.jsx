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
        <div className="container">
            <form onSubmit={onSubmit} className="profileForm">
                <input 
                    onChange={onChange}
                    value={newDisplayName}
                    type="text" 
                    placeholder="Display Name" 
                    autoFocus
                    className="formInput"
                />
                <input 
                    type="submit" 
                    placeholder="Update Profile" 
                    className="formBtn"
                    style={{marginTop: 10,}}
                />
            </form>
            <span 
                className="formBtn cancelBtn logOut" 
                onClick={onLogoutClick}>
                Log Out
            </span>
            <div style={{marginTop:30,}}>
                {nweets.map((nweet) => (
                    <Nweet 
                        key={nweet.id} 
                        nweetObj={nweet} 
                        isOwner={true} />
                ))}
            </div>            
        </div>
    );
};

export default EditProfile;
