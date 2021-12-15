import React, {useMemo, useState } from 'react';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import MyModal from './components/UI/MyModal/MyModal';
import MySelect from './components/UI/select/MySelect';

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'ввв', body: 'ыыыыы'},
        {id: 2, title: 'ааааа', body: 'ттт'},
        {id: 3, title: 'ррррр', body: 'pp'},
    ])
    const [filter, setFilter] =useState({sort:'', query: ''})
    const [modal, setModal] = useState(false)

    const sortedPosts = useMemo(() => {
        if(filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        } 
        return posts;

    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])

    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))

    }

    return (
        <div className = 'App'>
            <MyButton style = {{marginTop: 30}} onClick = {() => setModal(true)}>Создать пост</MyButton>
            <MyModal visible = {modal} setVisible = {setModal}>
                <PostForm create = {createPost} setModal = {setModal} />
            </MyModal>
            <hr style = {{margin: '14px 0'}} />
            <PostFilter 
                filter = {filter} 
                setFilter = {setFilter} 
            />
            <PostList 
                posts = {sortedAndSearchedPosts} 
                remove = {removePost} 
                title = 'Список постов 1' 
            /> 
        </div>
    )
}

export default App;
