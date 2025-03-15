import type {FC, CSSProperties} from 'react'
import {Icon} from '@/components/Icon'
import '@fontsource/material-icons'

export default function IconTest() {
  return (
    <div>
      <h3>UsingIconWithCSSClass</h3>
      <Icon name="home" className="text-blue" />
      <Icon name="check_circle_outline" className="text-red" style={{fontSize: '50px'}} />
    </div>
  )
}