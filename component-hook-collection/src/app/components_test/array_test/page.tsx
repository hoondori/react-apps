"use client"

import { useCallback, useState, useMemo } from "react"
import { Title } from "@/components/Texts"
import { Div } from "@/components/Div"
import {Icon} from "@/theme/Icon"
import * as D from '@/data'

export default function ArrayState() {
  const [images, setImages] = useState<string[]>([]);
  const addImage = useCallback(
    () => setImages( images => [D.randomImage(200, 100, 50), ...images]),
    []
  )
  const clearImages = useCallback(
    () => setImages(notUsed =>[]),
    []
  )
  const children = useMemo( 
    () => images.map((image, index)=> (
      <Div key={index} src={image} className="w-1/m-2" height="5rem" minHeight="5rem" />
    )),
    [images]
  )

  return (
    <section className="mt-4">
      <Title>ArrayState</Title>
      <div className="flex justify-center mt-4">
        <div data-tip="add image" className="tooltip">
          <Icon
            name="add"
            onClick={addImage}
            className="mr-12 btn-primary"
            iconClassName="text-3xl"
          />
        </div>
        <div data-tip="clear all" className="tooltip">
          <Icon name="clear_all" onClick={clearImages} iconClassName="text-3xl" />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">{children}</div>
    </section>
  )
}