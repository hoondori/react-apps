import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@routes/Home";
import Auth from "@routes/Auth";
import Profile from "@routes/EditProfile"
import Navigation from "@components/Navigation"

const AppRouter = ({ refreshUser, isLoggedIn, userObj }) => {
    return (
        <Router>
            {isLoggedIn && <Navigation userObj={userObj}/>}
            <Routes>
                {isLoggedIn ? (
                    <>
                        <Route exact path="/" element={ <Home userObj={userObj} /> } />
                        <Route exact path="/profile" element = { <Profile userObj={userObj} refreshUser={refreshUser} /> } />
                    </>
                ) : (
                    <Route exact path="/" element={ <Auth /> } />
                )}
            </Routes>
        </Router>
    )
}

export default AppRouter;