'use client'

import { useRef, useCallback } from "react"
import { Title } from "@/components/Texts"
import type { ValidatableInputMethods } from "@/theme/ValidatableInput"
import { ValidatableInput } from "@/theme/ValidatableInput"
import { Button } from "@/theme/button"

export default function ValidateInputTest() {
  const methodsRef = useRef<ValidatableInputMethods>(null)
  const validateEmail = useCallback(
    () => {
      if (methodsRef.current) {
        const [valid, valueOrErrorMessage] = methodsRef.current.validate()
        if(valid) alert(`${valueOrErrorMessage} 는 유효합니다`)
        else alert(valueOrErrorMessage)
      }
    },
    []
  )

  // prettier-ignore
  return (
    <section className="mt-4">
      <Title>ValidatableInputTest</Title>
      <div className="flex justify-center mt-4">
        <div className="flex flex-col w-1/3 p-2">
          <ValidatableInput type="email" ref={methodsRef} className="input-primary" />
          <Button onClick={validateEmail} className="mt-4 btn btn-primary">VALIDATE</Button>
        </div>
      </div>
    </section>
  )
}