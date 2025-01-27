import { useEffect, useState } from "react";
import { dbService } from "@/fbase";

const Home = ({userObj}) => {

    const [nweet, setNweet] = useState("");   // 현재 트웟
    const [nweets, setNweets] = useState([]); // 트윗 목록

    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.collection("nweets").add({
            text: nweet,
            createdAt: Date.now(),
            creatorId: userObj.uid,
        });
        setNweet(""); // default to empty string
    }

    const onChange = (event) => {
        event.preventDefault();
        const {
            target: { value },
        } = event;
        setNweet(value);
    }

    useEffect( () => {
        // getNweets();
        dbService.collection("nweets").onSnapshot((snapshot)=> {
            const newArray = snapshot.docs.map((document)=>({
                id: document.id, ...document.data(),
            }));
            setNweets(newArray);
        });
    }, []);

    return (
        <>
            <form onSubmit={onSubmit}>
                <input 
                    type="text"
                    placeholder="What's on your mind?"
                    maxLength={120}
                    value={nweet}
                    onChange={onChange}
                />
                <input type="submit" value="Nweet"/>
            </form>
            <div>
                {nweets.map((nweet) => (
                    <div key={nweet.id}>
                        <h4>{nweet.text}</h4>
                    </div>   
                
                ))}
            </div>
        </>
    );
} 

export default Home;