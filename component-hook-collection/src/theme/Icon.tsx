import type {FC} from 'react'
import type { ButtonProps } from '@/theme/button'
import type { IconProps as CIconProps } from '@/components/Icon'
import {Button} from '@/components/button'
import {Icon as CIcon} from '@/components/Icon'
import '@fontsource/material-icons'

export type IconProps = ButtonProps & CIconProps & {
  iconClassName?: string
}

export const Icon: FC<IconProps> = (
  {name, iconClassName, className, ...buttonProps}
) => {
  const btnClassName = ['btn-circle', className].join(' ')
  return (
    <Button {...buttonProps} className={btnClassName}>
      <CIcon className={iconClassName} name={name}/>
    </Button>
  )
}
