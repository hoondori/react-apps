'use client'

import { useRef, useCallback, useEffect } from "react"
import { Title } from "@/components/Texts"
import { Input } from "@/theme/input"
import { Button } from "@/theme/button"

export default function ForwardRefTest() {

  const inputRef = useRef<HTMLInputElement>(null)

  // 직접 물리 DOM에 접근해서 value 획득 가능
  const getValue = useCallback(
    () => alert(`input value: ${inputRef.current?.value}`),
    []
  )

  // 컴포넌트 로딩하자마자 input element 에 focus가 간다.
  useEffect(
    () => inputRef.current?.focus(),
    []
  )

  return (
    <section className="mt-4">
      <Title>ForwardRefTest</Title>
      <div className="flex justify-center mt-4">
        <div className="flex flex-col w-1/3 p-2">
          <Input ref={inputRef} className="input input-primary" />
          <Button onClick={getValue} className="mt-4 btn-primary">
            GET VALUE
          </Button>
        </div>
      </div>
    </section>
  )  
}