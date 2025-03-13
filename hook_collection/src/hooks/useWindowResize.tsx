import { useState, useEffect } from "react";
import { useEventListener } from "./useEventListener";

export const useWindowResize = () => {
  const [widthHeight, setWidthHeight] = useState<number[]>([0,0])

  // 컴포넌트가 mount될 때 window 셋팅
  useEffect(
    () => {
      setWidthHeight(notUsed => [window.innerWidth, window.innerHeight])
    },
    []
  )

  // 창 크기가 변경될 때마다 설정
  useEventListener(
    window, 
    'resize', 
    () => {
      setWidthHeight(notUsed => [window.innerWidth, window.innerHeight])
    }
  )

  return widthHeight
}