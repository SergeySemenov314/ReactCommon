import React from 'react';
import { useNavigate } from "react-router-dom";
import MyButton from './UI/button/MyButton';

function PostItem(props) {
    let router = useNavigate();

  return (
    <div className="post">
        <div className="post_content">
            <strong>{props.number}. {props.post.title}</strong>
            <div>
            {props.post.body}
            </div>
        </div>
        <div className="post__btns">
            <MyButton onClick = {() => router(`/posts/${props.post.id}`)} className="post_btn">Открыть</MyButton>
            <MyButton onClick = {() => props.remove(props.post)} className="post_btn">Удалить</MyButton>
        </div>
    </div>
  )
}

export default PostItem;
