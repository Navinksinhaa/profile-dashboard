import React from 'react';
import Menu from '../components/menu';
import { Outlet } from 'react-router-dom';



const AdminLayout = () => {
    
    return (
            <div className='d-flex'>
                <Menu />
                <Outlet />  
            </div>
            
        
        
    )
}
export default AdminLayout