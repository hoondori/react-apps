"use client"

import { useState, useEffect } from 'react'
import { Title } from '@/components/Texts'

export default function ClockFunction() {
  const [today, setToday] = useState(new Date())
  const [intervalId, setIntervalId] = useState<NodeJS.Timer | null>(null)

  useEffect(() => {
    const duration = 1000
    const id = setInterval(() => setToday(new Date()), duration)
    setIntervalId(id)

    return () => {
      if (id) {
        clearInterval(id)
      }
    }
  }, []) // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <section>
      <Title>ClassLifeCycle</Title>
      <div className="flex flex-col items-center mt-4">
        <p className="font-mono text-3xl">{today.toLocaleTimeString()} </p>
        <p className="font-mono text-3xl">{today.toLocaleDateString()} </p>
      </div>
    </section>
  )
}