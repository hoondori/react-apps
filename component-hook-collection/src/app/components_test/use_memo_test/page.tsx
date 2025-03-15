import {Title, Subtitle, Summary, Paragraph} from '@/components/Texts'
import * as D from "@/data"
import { Avatar } from '@/components/avatar'
import { useMemo } from 'react'

export default function CreateOrUseTest() {
  const headTexts = useMemo<string[]>(
    () =>['NO', 'NAME', 'JOB TITLE', 'EMAIL ADDRESS'], 
    []
  )
  const users = useMemo<D.IUser[]>( 
    () => D.makeArray(20).map(D.makeRandomUser),
    []
  )

  // table head
  const head = useMemo( 
    () => headTexts.map(text => <th key={text}>{text}</th>),
    [headTexts]
  )
  
  // table body
  const body = useMemo( 
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
    )),
    [users]
  )

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
