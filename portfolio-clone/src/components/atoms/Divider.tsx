/**  @jsxImportSource @emotion/react */

import { CSSObject } from '@emotion/react'

type DividerProps = {
  style?: CSSObject  // style prop은 CSSObject 타입으로 스타일을 받음
}

/**
 * 
 * Divider 컴포넌트는 기본적으로 구분선 역할을 하며, style prop을 통해 사용자 정의 스타일을 추가할 수 있습니다.
 * Emotion을 사용해 스타일을 관리하고, CSSObject 타입으로 스타일을 타입 안전하게 처리합니다.
 * 기본 스타일과 함께 전달된 스타일이 병합되어 적용되므로 유연하게 사용할 수 있습니다
 *  
 */

export const Divider = ({ style }: DividerProps) => (
  <div
    css={{
      borderBottomColor: '#ccc',  // 기본 색상 (연한 회색)
      borderBottomWidth: 1,       // 기본 두께 (1px)
      borderBottomStyle: 'solid', // 기본 실선 스타일
      ...style,                   // 전달된 style을 기본 스타일에 병합
    }}
  />
)