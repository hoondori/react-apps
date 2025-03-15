'use client'

import { Title, Subtitle } from "@/components/Texts";
import { Modal, ModalContent, ModalAction } from "@/theme/modal";
import { Button } from "@/theme/button";
import * as D from "@/data"
import { useToggle } from "@/hooks/useToggle";
import { useCallback } from "react";

export default function ModalTest() {
  const [open, toggleOpen] = useToggle(false)
  const onAccept = useCallback(() => toggleOpen(), [toggleOpen])

  return (
    <section className="mt-4">
      <Title>Modal Test</Title>
      <div className="flex justify-center p-4">
        <Button className="btn-primary" onClick={toggleOpen}>open modal</Button>
      </div>
      <Modal open={open}>
        <ModalContent onCloseIconClicked={toggleOpen} closeIconClassName="btn-primary btn-outline">
          <Subtitle>Modal</Subtitle>
          <p className="mt-4 text-justify">{D.randomParagraphs()}</p>
          <ModalAction>
            <Button className="w-24 btn-primary btn-sm" onClick={onAccept}>Accept</Button>
            <Button className="w-24 btn-sm" onClick={toggleOpen}>Close</Button>
          </ModalAction>
        </ModalContent>
      </Modal>
    </section>
  )
}