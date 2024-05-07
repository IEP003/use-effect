import { useEffect, useState } from 'react'
import { List } from './List'
import { Details } from './Details'

export interface TUsers {
    id: number
    name: string
}

export const UsersList = () => {
    const [users, setUser] = useState<TUsers[]>([]);
    const [activeUser, setActiveUsers] = useState<TUsers>({id:0, name:'undefind'});
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setUser(result);
            }
        )
    }, [])

    const handleClickActive = (e: { target: { id: number } }) => {  
        const arrCurrent:TUsers[] = users.filter((activeUser) => activeUser.id == e.target.id);
        setActiveUsers(...(arrCurrent as []))
    }

  return (
    <>
        <List users={users} activeUser={activeUser} handleClickActive={handleClickActive}/>
        {activeUser.id != 0 ?  <Details activeUser={activeUser}/> : ""} 
    </>

  )
}
