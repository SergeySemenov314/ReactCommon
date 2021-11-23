import React, {useState } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import MySelect from './components/UI/select/MySelect';

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'ввв', body: 'ыыыыы'},
        {id: 2, title: 'ааааа', body: 'ттт'},
        {id: 3, title: 'ррррр', body: 'pp'},
    ])

    const [selectedSort, setSelectedSort] = useState('')

    const createPost = (newPost) => {
        setPosts([...posts, newPost])

    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))

    }

    const sortPosts = (sort) => {
        setSelectedSort(sort)
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
        

    }



    return (
        <div className = 'App'>
            <PostForm create = {createPost}  />
            <hr style = {{margin: '14px 0'}} />
            <MySelect 
            value = {selectedSort}
            onChange = {sortPosts}
            defaultValue = 'Сортировка'
            options = {[
                {value:'title', name: 'По названию'},
                {value:'body', name: 'По описанию'},
            ]}
            />
            {posts.length
            ? <PostList posts = {posts} remove = {removePost} title = 'Список постов 1' /> 
            : <h1 style = {{textAlign: 'center'}}>Посты не найдены!</h1>
            }
                 
        </div>
    )
}

export default App;
