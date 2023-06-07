

import React from 'react';
import {useLocation} from 'react-router-dom';



const Profile = () => {
    const location = useLocation();
    let myUser = location.state.user;
    
  return (
    <div className='info'>
            {myUser.map((user) => {
            
                console.log(user);
                return (
                    <>  
                        <div className='header d-flex justify-content-between'>
                            <h3>Profile</h3>
                            <div>
                            <div class="dropdown">
                            <img className="profile" src={user.profilepicture} alt={user.profilepicture}/>
                                <button className="btn btn-secondary dropdown-toggle" 
                                type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">{user.name}
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>



                                
                                
                                    
                                
                                
                            </div>
                        </div>
                        <div className='body'>
                            <div className='body-left'>
                                <img className="picture" src={user.profilepicture} alt={user.profilepicture}/>
                                <h6 className='mx-5 py-2'>{user.name}</h6>
                                <div className='user-info'>
                                        <h3>UserName : <span>{user.username}</span></h3>
                                        <h3>e-mail : <span>{user.email}</span></h3>
                                        <h3>Phone : <span>{user.phone}</span></h3>
                                        <h3>Website : <span>{user.website}</span></h3>
                                </div>
                                <div>
                                    <h3>Company</h3>
                                    <div>
                                        <h3>Name : <span></span></h3>
                                        <h3>catchphrase : <span></span></h3>
                                        <h3>bs : <span></span></h3>
                                    </div>
                                </div>
                            </div>
                            <div className='body-right'>
                                    <h3>Address</h3>
                                    <div>
                                        <h3>Street : <span></span></h3>
                                        <h3>Suite : <span></span></h3>
                                        <h3>City : <span></span></h3>
                                        <h3>Zipcode : <span></span></h3>
                                    </div>
                                    <iframe
                                            width="600"
                                            height="450"
                                            frameborder="0"
                                            style={{border:"0"}}
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.0664279573686
                                            !2d${user.address.geo.lat}!3d${user.address.geo.lng}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!
                                            1s0x0%3A0x0!2zMzjCsDI2JzQ1LjYiTiAxNTDCsDA5JzIxLjgiVw!5e0!3m2!1sen!2s!4v1623178888888!5m2!1sen!2s"
                                            allowfullscreen
                                    >MAp</iframe>
                                    {user.address.geo.lat}{user.address.geo.lat}
                                    {console.log(user.address.geo.lat)}

                            </div>
                        </div>
                        
                    </>
                    
                )
            })}
        
    </div>
  )
}
export default Profile