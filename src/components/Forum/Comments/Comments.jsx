import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CommentsItem from './CommentsItem';
import { useEffect } from 'react';

function ForumPostItem() {

    const currentThread = useSelector(store => store.current.CurrentThreadReducer);
    const [comment, setComment] = useState('');
    console.log(currentThread);
    const comments = useSelector(store => store.form.ForumCommentsReducer);
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'GET_CURRENT_THREAD'});
        dispatch({ type: 'FETCH_COMMENTS', payload: currentThread });
    }, [])

    const addComment = (event) => {
        event.preventDefault();

        dispatch({
            type: 'ADD_COMMENT',
            payload: {
                text: comment,
                thread: currentThread,
                author: user.id,
            },
        });

        setComment('');
    }

    return (
        <div>
            {comments.map(comment =>
                (<CommentsItem comment={comment} key={comment.id} />)
            )}
            <form onSubmit={addComment}>
            <input 
            placeholder='Add Comment'
            type='text'
            value={comment}
            onChange={(event) => setComment(event.target.value)} 
            required />
            <button type='submit'>Send</button>
            </form>
        </div>
    );
}

export default ForumPostItem;