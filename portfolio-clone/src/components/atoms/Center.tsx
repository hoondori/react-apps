/**  @jsxImportSource @emotion/react */

import { HTMLAttributes, PropsWithChildren } from "react"

type CenterType = {
  type?: 'fixed'
} & HTMLAttributes<HTMLDivElement> // div에 적용할 수 있는 HTML 속성들을 모두 받음

export const Center = ({
  children,
  type,
  ...props
} : PropsWithChildren<CenterType>) => {
  return (
    <div
      css={{
        display: 'flex', // 자식 요소들을 flex로 배치
        alignItems: 'center', // 수직 정렬 중앙
        justifyContent: 'center', // 수평 정렬 중앙
        ...(
          type === 'fixed' ?
          {
            position: 'fixed', // type이 'fixed'이면 고정 위치로 설정
            margin: '0 auto', // 가운데 정렬을 위한 margin
            height: '100%', // 화면의 높이를 채우도록 설정
            left: '0', // 왼쪽 끝에 배치
            right: '0', // 오른쪽 끝에 배치
          } : 
          {}  
        ),
      }} // end of css
      {...props} // div에 전달된 다른 props (예: className, style 등)
    >
      {children}
    </div>
  )
}