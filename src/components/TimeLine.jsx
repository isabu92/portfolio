import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { auth, db } from '../firebase';
import "./TimeLine.css"

export const TimeLine =({isAuth})=>{
  const [postList,setPostList]=useState([])

  useEffect(()=>{
    const getPosts=async()=>{
      const data=await getDocs(collection(db,"posts"));
      setPostList(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
    }
    getPosts();
  },[])

  const onClickDelete=async(id)=>{
    await deleteDoc(doc(db,"posts",id));
    window.location.href="/";
  }

  return(
    <div className='homePage'>
      {postList.map((post)=>{
        return(
          <div className="postContents" key={post.id} >
          <div className="postHeader">
            <h2>{post.title}</h2>
          </div>
        <div className="postTextContainer">{post.postsText}</div>
          <a href={post.productURL} target="_blank" className="postTextContainer">{post.productURL}</a>
        <div className="nameAndDeleteButton">
          <h3>@{post.author.username}</h3>
          {post.author?.id===auth?.currentUser?.uid && 
            <button onClick={()=>onClickDelete(post.id)}>削除</button>
          }
        </div>
      </div>
        )
      })}
    </div>

  )
}

export default TimeLine;