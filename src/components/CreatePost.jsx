import { addDoc,collection } from "firebase/firestore";
import React from "react"
import { useState } from "react"
import "./CreatePost.css"
import {auth, db} from "../firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


export const CreatePost =({isAuth})=>{
  const [title,setTitle]=useState("");
  const [postText,setPostText]=useState("");
  const [productURL,setProductURL]=useState("")

  const navigate=useNavigate("/timeline");
  
  const createPost=async()=>{
    console.log(title)
    console.log(postText)
    console.log(productURL)
    await addDoc(collection(db,"posts"),{
      title:title,
      postsText:postText,
      productURL:productURL,
      author:{
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid
      }
    })
    setTitle("");
    setPostText("");
    navigate("/");
  }


  return(
    <div className="createPostPage">
      <div className="postContainer">
        <h1>買ってよかったモノを共有しよう</h1>
        <div className="inputPost">
          <input type="text" placeholder="商品名を記入" value={title} onChange={(e)=>setTitle(e.target.value)} />
        </div>
        <div className="inputPost">
          <div>投稿</div>
          <textarea placeholder="投稿内容を記入" value={postText} onChange={(e)=>setPostText(e.target.value)}></textarea>
        </div>
        <div className="inputPost">
          <div>商品リンクURL</div>
          <textarea placeholder="商品のURLを記入" value={productURL} onChange={(e)=>setProductURL(e.target.value)}></textarea>
        </div>
        <button className="postButton" onClick={createPost}>投稿する</button>
      </div>
    </div>

  )
}