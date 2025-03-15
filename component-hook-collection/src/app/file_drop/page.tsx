"use client"

import type { ChangeEvent, DragEvent } from "react"
import { useState, useRef, useCallback, useMemo } from "react"
import { useToggle } from "@/hooks/useToggle"
import { Title } from "@/components/Texts"
import { Div } from "@/components/Div"
import { Button } from "@/theme/button"
import { imageFileReaderP } from "@/utils"

export default function FileDrop() {
  const [imageUrls, setImageUrls] = useState<string[]>([])
  const [error, setError] = useState<Error|null>(null)
  const [loading, toggleLoading] = useToggle(false)

  // Div를 클릭하면 이미지를 파일 선택상자에서 가져오는 경로 
  const inputRef = useRef<HTMLInputElement>(null)
  const onDivClick = useCallback(() => inputRef.current?.click(), [])

  // 선택된 파일들의 url 디코딩 
  const makeImageUrls = useCallback(
    (files: File[]) => {
      const promises = Array.from(files).map(imageFileReaderP)
      toggleLoading() // 로딩중
      Promise.all(promises) // 모든 url을 decode한 후
      .then(urls => setImageUrls(imageUrls => [...urls, ...imageUrls]))  // prepend
      .catch(setError)
      .finally(toggleLoading) // 로딩 완료
    },
    [toggleLoading]
  )

  // <input type=file> click으로 파일 선택 상자가 열리고 다수 파일이 선택된 후
  const onInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setError(null)
      const files = e.target.files
      files && makeImageUrls(Array.from(files))
    },
    [makeImageUrls]
  )

  // Div 영역으로의 Drag 시에는 re-render 금지
  const onDivDragOver = useCallback(
    (e: DragEvent) => e.preventDefault(),
    []
  )

  const onDivDrop = useCallback(
    (e: DragEvent) => {
      e.preventDefault()
      setError(null)
      const files = e.dataTransfer?.files
      files && makeImageUrls(Array.from(files))
    },
    [makeImageUrls]
  )

  const images = useMemo( 
    () => imageUrls.map((url, index)=> (
      <Div key={index} src={url}
        className="m-2 bg-transparent bg-center bg-no-repeat bg-contain"
        width="5rem" height="5rem" />
    )),
    [imageUrls]
  )

  return (
    <section className="mt-4">
      <Title>FileDrop</Title>
      {error &&(
        <div className="p-4 mt-4 bg-red-200">
          <p className="text-3xl text-red-500 text-bold">{error.message}</p>
        </div>
      )}

      <div onClick={onDivClick} className="w-full mt-4 bg-gray-200 border border-gray-500">
        {loading && ( // 로딩 중
          <div className="flex items-center justify-center">
            <Button className="btn-circle loading"></Button>
          </div>
        )}

        // 클릭 or DragDrop 영역
        <div onDragOver={onDivDragOver} onDrop={onDivDrop}
          className="flex flex-col items-center justify-center h-40 cursor-pointer">
          <p className="text-3xl font-bold">drop images or click</p>
        </div>
        <input ref={inputRef} onChange={onInputChange}
          multiple className="hidden" type="file" accept="image/*" />      
      </div>

      <div className="flex flex-wrap justify-center">{images}</div>
    </section>
  )

}