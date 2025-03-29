/**  @jsxImportSource @emotion/react */

import { HTMLAttributes, PropsWithChildren } from 'react'
import { HTMLMotionProps, motion } from 'framer-motion'
import { useTheme } from '@emotion/react'

export type TextProps = PropsWithChildren<
  {
    bold?: boolean,
    color?: string
  } & HTMLMotionProps<'span'>
>

export const Text = ({ children, bold, color, ...props }: TextProps) => {
  const theme = useTheme()

  return (
    <motion.span
      css={{
        fontWeight: bold ? 'bold' : 'normal',
        whiteSpace: 'break-spaces',
        color: color,
      }}
      {...props}
    >
      {children}
    </motion.span>
  )
}




