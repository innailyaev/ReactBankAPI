import './App.css';
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Components/Header';
import GetAllUsers from './Components/GetAllUsers/GetAllUsers';
import AddUser from './Components/AddUser/AddUser';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div> 
          <Header/>
          {/* <Route path="/" exact component={Homepage}/> */}
          <Route path="/getUsers" exact component={GetAllUsers}/>
          <Route path="/addUser" exact component={AddUser}/>
          {/* <Route path="/recipes" exact component={Resipes}/>
          <Footer/> */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
