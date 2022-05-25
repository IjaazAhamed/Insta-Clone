import React, { useState } from 'react';
import moment from 'moment'


import './Form.css'
import {Link} from 'react-router-dom';


function Form() {
  

  async function userspost(event){
    event.preventDefault()
    
    const author= event.target.elements.author.value
    const location= event.target.elements.location.value
    const description= event.target.elements.description.value
    const date = moment(new Date()).format("DD/MM/YYYY")
    const file=event.target.elements.PostImage.files[0]
    const formData=new FormData();
    formData.append("name", author);
    formData.append("location", location);
    formData.append("description", description);
    
    formData.append("PostImage", file);
    formData.append("date", date);
   
    const response=await fetch ('https://instaclone-back.herokuapp.com/posts',{
      method:'POST',
      headers:{ },
      body: formData,
      
    })
   
    .then((response) => response.text())
    .catch(error=>console.log(error.message))

  
  }

  return (
    
    <div className='div1'>
      <div className='main'>
        <form onSubmit={userspost} encType='multipart/form-data'>

            <input type="file" id='file' name='PostImage' 
        className='inp' placeholder='No file chosen' required/>
           
              <input type="text" id='author'  
        className='inp' placeholder='Author' required/>
              <input  type="text" id='location'   className='inp' placeholder='Location' required/>
            
            <input type="text" id='description'  className='inp' placeholder='Description' required/><br></br><br></br>
            
            
              <button id='btn1' type="submit"><Link to='/Homepage'>  Post</Link></button>
            {/*  */}
        </form>
      </div>
    </div>
  )
}

export default Form