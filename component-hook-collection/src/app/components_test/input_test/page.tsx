'use client'

import { ChangeEvent, useCallback, useState } from "react"
import { Title } from "@/components/Texts"
import { Input } from "@/theme/input"

export default function InputTest() {
  const [value, setValue] = useState<string>('')
  const [checked, setChecked] = useState<boolean>(false)

  const onChangeValue = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {setValue(e.target.value)},
    []
  )

  const onChangeChecked = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {setChecked(e.target.checked)},
    []
  )

  return (
    <section className="mt-4">
      <div className="flex items-center justify-center p-4 mt-4">
        <Input type="text" value={value} onChange={onChangeValue} className="input-primary input-sm"/>
        <Input type="checkbox" checked={checked} onChange={onChangeChecked} className="ml-4 checkbox checkbox-primary input-sm"/>
      </div>
    </section>
  )
  
}