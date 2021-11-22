import React, {useState } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Javascript', body: 'Description'},
        {id: 3, title: 'Javascript', body: 'Description'},
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])

    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))

    }

    return (
        <div className = 'App'>
            <PostForm create = {createPost}  />
            <PostList posts = {posts} remove = {removePost} title = 'Список постов 1' />      
        </div>
    )
}

export default App;
