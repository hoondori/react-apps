import AppRouter from "@components/Router.jsx"
import { useEffect, useState } from "react";
import { authService } from '@/fbase.jsx'

function App() {
  // 인증된 현재 사용자가 NULL 이면 로그인이 안된 상태로 표시
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);  // 로그인한 유저 정보

  useEffect(()=> {
    authService.onAuthStateChanged( (user) => {
      if (user) { // user가 login되었으면
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true); // 로그인이든 아니던 최초 상태를 벗어난 것 표시
    })
  }, []);

  // 임의의 지점에서 firebase의 userObj이 변경된 경우 
  // 이 함수를 호출해서 local 내의 userObj 객체도 변화시킨다. 
  // 이 함수를 널리 퍼트려서 호출당하게 하자. 
  const refreshUser = () => {
    console.log("refreshUser called", authService.currentUser)
    setUserObj(authService.currentUser);
  }

  return (
    <>
      {init ? 
        <AppRouter 
          refreshUser={refreshUser} 
          isLoggedIn={isLoggedIn} 
          userObj={userObj} 
        /> 
        : "Initializing..."
      }
    </>
  )
}

export default App
