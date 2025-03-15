"use client"

import { Subtitle, Title } from "@/components/Texts";
import { useResponsive, ResponsiveProvider } from "@/contexts/ResponsiveContext";

export default function ResponsiveContextTest() {
  const breakpoint = useResponsive()

  console.log(breakpoint)   
  return (
    <ResponsiveProvider>
      <section className="mt-4">
        <Title>ResponsiveContextTest</Title>
        <div className="mt-4">
          <Subtitle>breakpoint: {breakpoint}</Subtitle>
        </div>
      </section>
    </ResponsiveProvider>
  )
}