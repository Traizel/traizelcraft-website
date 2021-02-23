import { useSelector, useDispatch } from 'react-redux';
import CommentsItem from './CommentsItem';
import { useEffect } from 'react';

function ForumPostItem() {

    const currentThread = useSelector(store => store.current);
    console.log(currentThread);
    const comments = useSelector(store => store.form);
    console.log(comments);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_COMMENTS', payload: currentThread });
    }, [])

    return (
        <div>
            {comments.map(comment =>
                (<CommentsItem comment={comment} key={comment.id} />)
            )}
        </div>
    );
}

export default ForumPostItem;