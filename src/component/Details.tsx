import { useEffect, useMemo, useState } from 'react'
import { TUsers } from './UsersList'

interface Props {
  activeUser: TUsers
}

interface TUsersDetails {
  city: string
  company: string 
  position: string
}

interface TUsersActive {
  avatar: string
  details: TUsersDetails
  id: number
  name: string
}

export const Details = ({activeUser}:Props) => {
  const [userActive, setUserActive] = useState<TUsersActive>()
  console.log(userActive)
  const lastActiveUser = useMemo(() => activeUser, [activeUser])
  
  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${activeUser.id}.json`)
    .then(res => res.json())
    .then(
        (result) => {
          setUserActive(result)
        }
    )
}, [lastActiveUser])

  return (
    <>
        <div className='user-card'>
            <img src={userActive?.avatar} alt="" />
            <div className='user-name'>{userActive?.name}</div>
            <div className='user-city'>{userActive?.details.city}</div>
            <div className='user-job'>{userActive?.details.company}</div>
            <div className='user-position'>{userActive?.details.position}</div>
        </div>
    </>
  )
}
