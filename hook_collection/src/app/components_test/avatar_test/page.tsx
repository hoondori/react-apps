import {Title, Subtitle, Summary, Paragraph} from '@/components/Texts'
import { Avatar } from '@/components/avatar'
import * as D from "@/data"
import { useOrCreate } from '@/hooks/UseOrCreate'
import { Div } from '@/components/Div'

export default function AvatarTest() {
  const avatars = D.range(0,5).map(index =>
    <Avatar 
      key={index}
      className="inline-block -ml-6 border-4 border-white"
      src={D.randomAvatar()}
    />
  )

  return (
    <section className="mt-4">
      <Title>Avatar Test</Title>
      <Div className="px-12 py-4 m-8 bg-blue-300">{avatars}</Div>
    </section>
  )
}