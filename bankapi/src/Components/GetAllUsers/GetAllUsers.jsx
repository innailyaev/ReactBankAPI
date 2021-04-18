import React, {useState, useEffect} from 'react';
import axios from 'axios';
import GetUserById from '../GetUserById/GetUserById';
import './GetAllUsersStyle.css';

const GetAllUsers =()=>{

    const [usersData,setUsersData] = useState([]);

  const getApi= async () => {
    console.log("getApi");
    try{
        const response = await axios.get('https://bankapi-innailyaev.herokuapp.com/api/users');
        console.log(response.data.users);
        setUsersData(response.data.users);
       
    }catch(err){
            console.log(err); 
    }
}

  useEffect(()=>{
    getApi();
  },[])

  return (
    <div>
        <h1></h1>
        <table>
            <thead style={{fontSize:'20px'}}>
                <tr>
                    <th style={{width:'100px'}}>ID</th>
                    <th style={{width:'150px'}}>CASH</th>
                    <th style={{width:'150px'}}>CREDIT</th>
                </tr>
            </thead>
            <tbody>
          {
              usersData.map((u,index)=>(
                <tr key={index} style={{marginBottom:'15px'}}>
                  <td>{u.id}</td>
                  <td>{u.cash}</td>
                  <td>{u.credit}</td>
                </tr>
              ))
          }
        </tbody>
      </table>

      <GetUserById/>
    </div>
  );
}

export default GetAllUsers;