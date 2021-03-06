import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import PostService from '../components/API/PostServise';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';

function PostIdPage(props) {
    const params = useParams()

    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    const [fetchPostById, isPostLoading, postError] = useFetching(async (id) => {
        const responce = await PostService.getById(id);
        setPost(responce.data)
    })

    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const responce = await PostService.getCommentsByPostId(id);
        setComments(responce.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])
  return (
    <div>
      <h1>Вы открыли страницу поста с id {params.id}</h1>
      {isPostLoading
        ? <Loader/>
        : <div>{post.id}. {post.title}</div>
      }
      <h1>Комментарии</h1>
      {isComLoading
        ? <Loader/>
        : <div>
            {comments.map(comm =>
                <div style={{marginTop:15}}>
                    <h5>{comm.email}</h5>    
                    <div>{comm.body}</div>
                </div>
              
            )}
        </div>
        }
      
    </div>
  )
}

export default PostIdPage;
