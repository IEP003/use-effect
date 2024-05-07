import './List.css'
import { TUsers } from './UsersList';

interface Props {
    users: TUsers[]
    activeUser: TUsers
    handleClickActive: () => void
}

export const List = ({ users, activeUser, handleClickActive }: Props) => {  
    return (
    <>
        <div className='user-list'>
            {users.map((item, index) => (
                    <div className={`user-items ${activeUser.id === item.id? 'active-user' : ''}`} key={index} id={item.id} onClick={handleClickActive}>{item.name}</div>
                ))}
        </div>
    </> 
  )
}


