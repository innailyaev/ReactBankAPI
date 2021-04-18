import React, { useState } from 'react';
import axios from 'axios';
import './UpdateCredit.css';

const UpdateCredit =({userId})=>{
    
    const [id] = useState(userId);
    const [credit,setCredit] = useState();
    const [error,setError] = useState();

    const putCredit= async () => {
        console.log("put");
        try{
           const response = await axios.put(`https://bankapi-innailyaev.herokuapp.com/api/users/updateCredit/${credit}/${id}`);
           console.log(response);
            if(response.data.error){
                setError(response.data.error);
            }
            else{
                setError('');
            }
           
        }catch(err){
                console.log(err); 
        }
    }

    const clickHandler = ()=>{
        putCredit();
    }

  return (
    <div className="creditContainer">
        
        <input type="text" onChange={(e)=>setCredit(e.target.value)}/>
        <button onClick={clickHandler}>Update Credit</button>

    </div>
  );
}

export default UpdateCredit;