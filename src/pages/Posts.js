import React, {useEffect, useMemo, useState } from 'react';
import PostService from '../components/API/PostServise';
import PostFilter from '../components/PostFilter';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import MyButton from '../components/UI/button/MyButton';
import Loader from '../components/UI/Loader/Loader';
import MyModal from '../components/UI/MyModal/MyModal';
import Pagination from '../components/UI/pagination/Pagination';
import { useFetching } from '../hooks/useFetching';
import { useSortedAndSearchedPosts } from '../hooks/usePosts';
import { getPageCount } from '../utils/pages';


function Posts() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'ввв', body: 'ыыыыы'},
        {id: 2, title: 'ааааа', body: 'ттт'},
        {id: 3, title: 'ррррр', body: 'pp'},
    ])

    const [filter, setFilter] =useState({sort:'', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = useSortedAndSearchedPosts(posts, filter.sort, filter.query);
    

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const responce = await PostService.getAll(limit, page);
        setPosts(responce.data)
        const totalCount = responce.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit))
    })


    const createPost = (newPost) => {
        setPosts([...posts, newPost])

    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))

    }

    useEffect(() => {
        fetchPosts(limit, page)
    }, [])

    const changePage = (p) =>{
        setPage(p)
        fetchPosts(limit, p)
    }

    return (
        <div className = 'App'>
            <MyButton onClick = {fetchPosts}>Получить посты</MyButton>
            <MyButton style = {{marginTop: 30}} onClick = {() => setModal(true)}>Создать пост</MyButton>
            <MyModal visible = {modal} setVisible = {setModal}>
                <PostForm create = {createPost} setModal = {setModal} />
            </MyModal>
            <hr style = {{margin: '14px 0'}} />
            <PostFilter 
                filter = {filter} 
                setFilter = {setFilter} 
            />
            {postError &&
                <h1>Произошла ошибка ${postError}</h1>
            }
            {isPostsLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '30px'}}><Loader/></div>
                : <PostList 
                        posts = {sortedAndSearchedPosts} 
                        remove = {removePost} 
                        title = 'Список постов 1' 
                    />
            }
           <Pagination
                page = {page} 
                changePage={changePage}
                totalPages={totalPages}
           />
        </div>
    )
}

export default Posts;
