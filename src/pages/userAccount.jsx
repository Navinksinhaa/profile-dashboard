import { React, useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';


const UserAccount = () => {

    const [users, setUser] = useState([]);
    const navigate = useNavigate()

    const fetchData = async () => {
        try {
            const data = await fetch('https://panorbit.in/api/users.json');
            const res = await data.json();
            setUser(res.users)
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    const handleClick = (id) => {
        console.log(id)
        let user = users.filter((user) => user.id === id)
        
        navigate('/profile', {state:{user : user}})
    }

    return (
        <div className='background'>
            <div className="card">
                <div >
                    <h5 className='card-title'>Select an Account</h5>
                </div>
                <ul className="list-group list-group-flush">
                    {users.map((user) => {
                        return (
                            <li key = {user.id} className="list-group-item" >
                                <img className="profile" src={user.profilepicture} alt={user.profilepicture}/>
                                <button className="btn" onClick={()=> handleClick(user.id)}>{user.name}</button>
                                </li>
                        )
                        
                    })}
                    
                </ul>
                
            </div>

        </div>
    )
}

export default UserAccount