'use client'

import type { ChangeEvent } from "react"
import { useMemo, useCallback, useState, useEffect } from "react"
import { Title, Subtitle } from "@/components/Texts"
import * as D from '@/data'
import dynamic from 'next/dynamic'


export default function RadioInputTest() {

  // 상태를 null로 초기화하여 서버 측에서는 렌더링되지 않도록 처리
  const [jobTitles, setJobTitles] = useState<string[] | null>(null)
  const [selected, setSelected] = useState<number>(0)

  // 클라이언트 측에서만 jobTitles 값을 설정하도록 useEffect 사용
  useEffect(() => {
    const generatedJobTitles = D.makeArray(4).map(D.randomJobTitle)
    setJobTitles(generatedJobTitles)
    setSelected(0) 
  }, []) // 빈 배열을 넣어 컴포넌트가 마운트될 때 한 번만 실행

  // higher order callback
  const onChange = useCallback(
    (index: number) => () => setSelected( notUsed => index),
    []
  )

  // jobTitles가 아직 설정되지 않았다면 로딩 상태를 표시
  if (jobTitles === null) {
    return <div>Loading...</div>
  }

  const radioInputs = jobTitles.map((value, index)=>(
    <label key={index} className="flex justify-start cursor-pointer label">
      <input type="radio" name="jobs" 
        className="mr-4 radio radio-primary" 
        checked={index == selected}
        defaultValue={value}
        onChange={onChange(index)}
      />
      <span className="label-text">{value}</span>
    </label>
  ))
  
  return (
    <section className="mt-4">
      <Title>RadioInputTest</Title>
      <div className="flex flex-col justify-center mt-4">
        <div className="flex justify-center p-4 mt-4">
          <div className="flex flex-col mt-4">{radioInputs}</div>
        </div>
      </div>
    </section>
  )  
}