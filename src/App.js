import logo from './logo.svg';
import './App.css';
import Api from './Api'
import React, { useEffect } from 'react'
import Header from './header'
import Footer from './footer'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Signup1 from './Signup1'
import SignIn from './SignIn'
import Dashboard from './Dashboard'
import Changepassword from './Changepassword';
import Seeexpenses from './Seeexpenses';
import Addexpense1 from './Addexpense1';

function App() {
  return (
    <div>
        <div>
        
         <Router>
           <Header/>
             <Routes>
                 <Route path='/' Component={Home}/>
                 <Route path='/about' Component={About}/>
                 <Route path='/contact' Component={Contact}/>
                 <Route path='/signup' Component={Signup1}/>
                 <Route path='/signIn' Component={SignIn}/>
                 <Route path='/dashboard/:id' Component={Dashboard}/>
                 <Route path='/changepassword/:id' Component={Changepassword}/>
                 {/* <Route path='/addexpense/:id' Component={Addexpense}/> */}
                 <Route path='/addexpense/:id' Component={Addexpense1}/>
                 <Route path='/seeexpense/:id' Component={Seeexpenses}/>
             </Routes>
             <Footer/>
         </Router>
     </div>
    </div>
  )
}

export default App;
