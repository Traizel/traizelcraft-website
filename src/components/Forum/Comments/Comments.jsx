import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CommentsItem from './CommentsItem';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';

function ForumPostItem() {

    const currentThread = useSelector(store => store.current.CurrentThreadReducer);
    const [comment, setComment] = useState('');
    const comments = useSelector(store => store.form.ForumCommentsReducer);
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'GET_CURRENT_THREAD'});
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
        <div className='forum-main'>
            <form onSubmit={addComment}>
            <input 
            className="col-form-label col-form-label-sm long-input"
            placeholder='Add Comment'
            type='text'
            value={comment}
            onChange={(event) => setComment(event.target.value)} 
            required />
                <button type='submit' className="btn btn-secondary">Send</button>
            </form>
            <Container>
                {comments.map(comment =>
                    (<CommentsItem comment={comment} key={comment.id} />)
                )}
            </Container>
        </div>
    );
}

export default ForumPostItem;