import { useState } from 'react';
import React from 'react';
import "./Counter.css"

function Counter(){
  
  const   [Data ,setData ] = useState (0) ;
  
  function Plus(){
      setData(Data+1);
      console.log("i am clicked");
  }
  function Minus(){
    setData(Data-1 );
    if(Data===0){
      setData(Data*0);
    }
  }
  function Reset(){
    setData(Data * 0 )
  }
  
  return(<>   
 <div className='Counter'>
       <h1 >{Data}</h1>
       <h1 className='C-2'>Counter</h1>
       <button style={{padding:"7px 12px" , textAlign:"center"}} onClick={Minus}>Sub</button>
       <button style={{padding:"7px 12px" , textAlign:"center"}} onClick={Reset}>Reset</button>
       <button style={{padding:"7px 12px" , textAlign:"center"}} onClick={Plus}>Add</button> 
       </div>
 </>)
  }
export default Counter;


