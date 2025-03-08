'use client'  // 클라이언트 사이드에서만 동작하는 컴포넌트로 설정

import {useMemo, useCallback} from 'react'
import { Title } from '@/components/Texts'
import { Button } from '@/components/button'
import * as D from '@/data'

export default function CallbackTest() {
  const onClick = useCallback(
    (name:string) => () => alert(`${name} button clicked`), 
    []
  )

  const buttons = useMemo(
    () => D.makeArray(3).map(D.randomName).map((name,index) =>
      <Button key={index} onClick={onClick(name)} className="btn-primary btn-wide btn-xs">{name}</Button>
    ),
    [onClick]
  )

  return (
    <div className="mt-4">
      <Title>Callback Test</Title>
      <div className="flex justify-evenly mt-4">{buttons}</div>
    </div>
  )
}