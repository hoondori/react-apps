import { dbService } from "../fbase";

const Nweet = ({nweetObj, isOwner}) => {

    const onDeleteClick = async () => {
        const ok = window.confirm("정말 삭제할 생각?");
        if (ok) {
            const data = await dbService.doc(`nweets/${nweetObj.id}`).delete();
        }
    }

    return (  
        <div>
            <h4>{nweetObj.text}</h4>
            {isOwner && (
                <>
                    <button onClick={onDeleteClick}>Delete Nweet</button>
                    <button>Edit Nweet</button>
                </>
            )}
        </div>
    );
}
 
export default Nweet;