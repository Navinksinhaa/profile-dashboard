import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AdminLayout from './Layout/admin';
import UserAccount from './pages/userAccount';
import Posts from './pages/posts';
import Profile from './pages/profile';
import Gallery from './pages/gallery';
import Todo from './pages/todo';

function App() {

  return (
    <div className="App">
      <Router>
        
        <Routes>

          <Route path='/' element={<UserAccount/>} />

          <Route element={<AdminLayout />}>
            <Route exact path='/posts' element={<Posts />} />


            <Route path='/profile' element={<Profile/>} />


            <Route path='/gallery' element={<Gallery />} />


            <Route path='/todo' element={<Todo />}/>
          </Route>
        </Routes>
        
      </Router>
      
    </div>
  );
}

export default App;
