'use client'

import { Title, Subtitle } from "@/components/Texts";
import { useWindowResize } from "@/hooks/useWindowResize";

export default function WindowResizeTest() {
  const [width, height] = useWindowResize()

  return (
    <section className="mt-4">
      <Title>WindowResizeTest</Title>
      <Subtitle className="mt-4">
        width: {width}, height: {height}
      </Subtitle>
    </section>
  )
}