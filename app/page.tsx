"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import Card from "./components/Card";

type Post = {
  userId: number,
  id:number,
  title:string,
  body:string
}

export default function Home() {
  const[post,setPost] = useState<Post[]>([])
  const[loading,setLoading] = useState(true) 

  async function calling()
  {
    try {
      const data = await fetch('/api/posts')
      const res = await data.json();
      // setLoading(false)
      setPost(res)
    } catch (error) {
      console.log(error) 
    }
  }

  useEffect(() =>{
    calling()
  },[])
  
    return ( 
      <>    
      {
      (post.length===0) ? <div>Loading...</div> : 
      
      <div>
    {post.map(post =>{
      return (
        <Card userId={post.userId} id={post.id} title={post.title} body={post.body}/>
      )
    })}</div>
    }
    </>
  );  
}


