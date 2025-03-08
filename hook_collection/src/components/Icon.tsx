import type {FC, DetailedHTMLProps, HTMLAttributes, PropsWithChildren} from 'react'
import type { WidthHeight } from './WidthHeight'


export type ReactSpanPros = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>

export type IconProps = ReactSpanPros & { name: string }

// prettier-ignore
export const Icon: FC<IconProps> = ({
  name, className: _className, ...props
}) => {
  const className = ['material-icons', _className].join(' ')
  return <span {...props} className={className}>{name}</span>
}