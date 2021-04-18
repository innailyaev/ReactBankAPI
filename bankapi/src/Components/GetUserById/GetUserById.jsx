import React, {useState} from 'react';
import axios from 'axios';
import './GetByIdStyle.css';
import UpdateCredit from "../UpdateCredit/UpdateCredit";

const GetAllUsers =()=>{

    const [id,setIdData] = useState();
    const [userData,setUserData] = useState();

  const getApi= async () => {
    console.log("getApi");
    try{
        const response = await axios.get(`https://bankapi-innailyaev.herokuapp.com/api/users/${id}`);
        console.log(response);
        setUserData(response.data);
       
    }catch(err){
            console.log(err); 
    }
}

//   useEffect(()=>{
//     getApi();
//   },[])

  const clickHandler =()=>{
      getApi();
  }

  return (
    <div className="getByIdContainer">
      <h2>Get User By ID</h2>
      <input type="text" onChange={(e)=>setIdData(e.target.value)}/>
      <button className="btn" onClick={clickHandler}>Search</button>
      <div>
      { (userData) ? <div className="UserDetailes">
                        <p>User Detailes</p>
                        <p><span>Cash:</span> {userData.cash}</p>
                        <p><span>Credit:</span> {userData.credit}</p>
                        <UpdateCredit userId={userData.id}/>
                      </div>
                      
      :null}

      </div>
    </div>
  );
}

export default GetAllUsers;