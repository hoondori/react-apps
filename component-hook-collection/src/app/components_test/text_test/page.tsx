
import * as D from "@/data"
import {Title, Subtitle, Summary, Paragraph} from '@/components/Texts'

const paragraphs = D.makeArray(10).map(D.randomParagraphs).join('\n\n')
const summary = D.makeArray(3).map(D.randomSentence).join('\n')

export default function TextTest() {
  return (
    <div>
      <Title> TextTest </Title>
      <div>
        <Title className="text-blue-600">{D.randomTitleText()}</Title>
        <Subtitle className="text-blue-400">{D.randomSentence()}</Subtitle>
        <p className="text-xl italic text-center text-green-900 text-bold">
          {D.randomName()}
        </p>
        <Paragraph numberOfLines={2} className='text-gray-400'>{paragraphs}</Paragraph>
        <Summary className="text-center text-red-500">{summary}</Summary>
        <p className="text-center text-pink-400">
          {D.randomDayMonthYear()} {(D.randomRelativeDate())}
        </p>
      </div>
    </div>
  )
}
