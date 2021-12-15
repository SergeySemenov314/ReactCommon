import React, {useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

function PostForm({create, setModal}) {

    const [post, setPost] = useState({title:'', body:''});

    const addNewPost = (evt) => {
        evt.preventDefault();
        create( {...post, id: Date.now()})
        setPost({title:'', body:''})
        setModal(false)
    }


  return (
    <form>
        <MyInput
        value = {post.title} 
        onChange = {e => setPost({...post, title: e.target.value}) }
        type = 'text' 
        placeholder = 'Название поста' 
        />
        <MyInput 
        value = {post.body} 
        onChange = {e => setPost({...post, body: e.target.value}) }
        type = 'text' 
        placeholder = 'Описание поста' 
        />
        <MyButton onClick = {addNewPost}>Создать пост</MyButton>   
</form>
  )
}

export default PostForm;
