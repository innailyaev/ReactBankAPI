import React, {useState, useEffect} from 'react';
import axios from 'axios';

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
    <div>
      <input type="text" onChange={(e)=>setIdData(e.target.value)}/>
      <input type="button" value="Search" onClick={clickHandler}/>
    </div>
  );
}

export default GetAllUsers;