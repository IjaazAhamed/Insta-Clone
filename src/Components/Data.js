import React from 'react'
import { useState,useEffect } from 'react';
import Head from './Head';
import Postcard from './Postcard';

export default function Data() {

  const [items, setItems] = useState([]);
    useEffect(() => {
        async function getdata(){
          let users=await fetch("https://instaclone-back.herokuapp.com/post")
          let reqdata=await users.json()
          setItems([...reqdata.data]);
        } 
       getdata()
      }, [])
    
  return (<>
      <div className='head'>
          <Head/>
      </div>
    <section className='card-section'>
    {items.map((cardDetails)=>(
      <Postcard cardDetails={cardDetails}/>
    ))}
</section>
</>   
  )
  }