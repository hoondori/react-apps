import { authService, dbService } from "@/fbase.jsx"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import Nweet from "@components/Nweet";

const EditProfile = ({ userObj }) => {
    const navigate = useNavigate();
    const [nweets, setNweets] = useState([]); // 트윗 목록

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

        console.log(nweets.docs.map((doc)=> doc.data()));
    };

    useEffect(() => {
        getMyNweets();
    }, []);

    return (
        <>
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
