
import React from 'react';
import {Link} from 'react-router-dom';

const Menu = () => {
  return (
    <section id='menu'>
        <nav className='navbar navbar-vertical fixed-start navbar-expand-md navbar-light p-0'>
            <div className='d-flex flex-column bg-white' style={{height:'100vh'}}>
                {/* <div className='p-3'>
                    <h1 className='text-primary' style={{marginTop:'50px'}}>Panorbit</h1>
                </div> */}
            
            <div>
                <ul className='navbar-nav d-flex flex-column justify-content-center gap-3 px-4 dashboard' >
                    <li className='nav-item' >
                        <Link to='/profile' style={{textDecoration:'none',color:'white'}}>Profile
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/posts' style={{textDecoration:'none',color:'white'}}>Posts
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/gallery' style={{textDecoration:'none',color:'white'}}>Gallery
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/todo' style={{textDecoration:'none',color:'white'}}>ToDo
                        </Link>
                    </li>
                </ul>
            </div>
            </div>
            
        </nav>
    </section>
  )
}
export default Menu