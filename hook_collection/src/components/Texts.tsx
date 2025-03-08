import type {FC, DetailedHTMLProps, HTMLAttributes} from 'react'
import { makeClassName } from './textUtil'

type TextProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>

export type TitleProps = TextProps & {
  numberOfLines?: number
}

export const Title: FC<TitleProps> = ({
  className: _className,
  numberOfLines,
  ...props
}) => {
  const newClassName = makeClassName(
    'font-bold text-5xl text-center whitespace-pre-line',
    _className,
    numberOfLines 
  );

  return <p {...props} className={newClassName} />
}

export type SubtitleProps = TitleProps & {}
export const Subtitle: FC<SubtitleProps> = ({
  className: _className,
  numberOfLines,
  ...props
}) => {
  const newClassName = makeClassName(
    'font-semibold text-3xl text-center whitespace-pre-line',
    _className,
    numberOfLines 
  );

  return <p {...props} className={newClassName} />
}


export type SummaryProps = SubtitleProps & {}
export const Summary: FC<SummaryProps> = ({
  className: _className,
  numberOfLines,
  ...props
}) => {
  const newClassName = makeClassName(
    'text-sm whitespace-pre-line',
    _className,
    numberOfLines 
  );

  return <p {...props} className={newClassName} />
}

export type ParagraphProps = SummaryProps & {}
export const Paragraph: FC<ParagraphProps> = ({
  className: _className,
  numberOfLines,
  ...props
}) => {
  const newClassName = makeClassName(
    'font-normal text-base whitespace-pre-line',
    _className,
    numberOfLines 
  );

  return <p {...props} className={newClassName} />
}

