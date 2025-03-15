"use client"

import { useState, useCallback } from 'react'
import {Title} from '@/components/Texts'
import { Icon } from "@/theme/Icon"


export default function Counter() {
  const [count, setCount] = useState<number>(0)

  const increment = useCallback(
    () => {setCount(count => count + 1)},
    []
  )
  const decrement = useCallback(
    () => {setCount(count => count - 1)},
    []
  )

  //prettier-ignore
  return (
    <section className="mt-4 mb-8">
      <Title>NumberState</Title>
      <div className="flex justify-center">
        <div className="flex items-center justify-between w-1/4 mt-4">
          <Icon name="add" className="btn-primary btn-lg" iconClassName="text-4xl" onClick={increment} />
          <p className="text-3xl text-bold text-primary">{count}</p>
          <Icon name="remove" className="btn-accent btn-lg" iconClassName="text-4xl" onClick={decrement} />
        </div>
      </div>
    </section>
  )
}

