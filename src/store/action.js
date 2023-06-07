import {GETDATA,LOGINSUCESS,LOGOUT} from './actionType.js';

export const getData = () => {
    return async(dispatch) => {
        const data = await fetch('https://panorbit.in/api/users.json');
        const res = await data.json()
        dispatch({type:'GETDATA',payload:res.user})
    }
}

export const login = (id) => {
    return <Link to='/profile/${id}'></Link>
}

