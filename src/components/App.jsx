import AppRouter from "@components/Router.jsx"
import { useEffect, useState } from "react";
import { authService } from '@/fbase.jsx'

function App() {
  // 인증된 현재 사용자가 NULL 이면 로그인이 안된 상태로 표시
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(()=> {
    authService.onAuthStateChanged( (user) => {
      if (user) { // user가 login되었으면
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true); // 로그인이든 아니던 최초 상태를 벗어난 것 표시
    })
  }, []);

  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing..."}
      <footer>&copy; {new Date().getFullYear()} Nwitter </footer>
    </>
  )
}

export default App
