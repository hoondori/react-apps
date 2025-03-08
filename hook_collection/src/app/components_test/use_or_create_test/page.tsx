import {Title, Subtitle, Summary, Paragraph} from '@/components/Texts'
import * as D from "@/data"
import { useOrCreate } from '@/hooks/UseOrCreate'
import { Avatar } from '@/components/ avatar'

export default function CreateOrUseTest() {
  const headTexts = useOrCreate<string[]>('headTexts', () =>[
   'NO', 'NAME', 'JOB TITLE', 'EMAIL ADDRESS' 
  ])
  const users = useOrCreate<D.IUser[]>('users', 
    () =>  D.makeArray(20).map(D.makeRandomUser)
  )

  // table head
  const head = useOrCreate('head', 
    () => headTexts.map(text => <th key={text}>{text}</th>)
  )
  
  // table body
  
  const body = useOrCreate('children', 
    () => users.map((user, index) => (
      <tr key={user.uuid}>
        <th>{index+1}</th>
        <td className="flex items-center">
          <Avatar src={user.avatar} size="1.5em" />
          <p className="ml-2">{user.name}</p>
        </td>
        <td>{user.jobTitle}</td>
        <td>{user.email}</td>
      </tr>
    )
  ))

  return (
    <div className='mt-4'>
      <Title>CreateOrUseTest</Title>
      <div className='overflow-x-auto mt-4 p-4'>
        <table className="table table-zebra table-compat w-full">
          <thead>
            <tr>{head}</tr>
          </thead>
          <tbody>{body}</tbody>
        </table>
      </div>
    </div>
  )
}
