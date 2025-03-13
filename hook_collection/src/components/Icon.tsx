import type {FC, DetailedHTMLProps, HTMLAttributes} from 'react'

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