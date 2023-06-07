
import {GETDATA,LOGINSUCESS,LOGOUT} from './actionType.js';

const initialState = {
    users: [],
    auth: false
}

const reducer = (oldState = initialState,action) => {
    const {type,payload} = action
    switch(type) {
        case 'GETDATA':
            return {...oldState,users}

        case 'LOGINSUCESS':
            return {...oldState,auth:true}

        case 'LOGOUT' :
            return {...oldState,auth:false}
    }

}