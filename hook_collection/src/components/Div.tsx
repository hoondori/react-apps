import type {FC, DetailedHTMLProps, HTMLAttributes, PropsWithChildren} from 'react'
import type { WidthHeight } from './WidthHeight'

/*
React.DetailedHTMLProps<React.HTMLProps<T>, T>:
  HTML 요소의 속성 외에도 React 전용 속성(예: ref, key, dangerouslySetInnerHTML)을 포함합니다.
DetailedHTMLProps<HTMLAttributes<T>, T>:
  순수 HTML 속성만 포함하며, React 전용 속성은 포함하지 않습니다.
*/
export type ReactDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

// ReactDivProps를 확장하여, WidthHeight 타입과 children 속성도 포함한 타입
// src 속성 포함
export type DivProps = ReactDivProps & PropsWithChildren<WidthHeight> & {
  src?: string
}

// prettier-ignore
export const Div: FC<DivProps> = ({
  width, height, style: _style, src, ...props
}) => {
  const style = {..._style, width, height, backgroundImage: src && `url(${src})`}
  return <div {...props} style={style} />
}