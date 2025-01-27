import { authService } from "@/fbase.jsx"
import { useNavigate } from "react-router-dom"

const EditProfile = () => {
    const navigate = useNavigate();

    const onLogoutClick = () => {
        authService.signOut();
        navigate("/");  // 로그 아웃 후 Home으로 이동
    }

    return (
        <>
            <button onClick={onLogoutClick}>Log Out</button>
        </>
    );
};

export default EditProfile;
