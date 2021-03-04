import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Comments from '../Comments/Comments';
import Header from '../ForumHeader/ForumHeader';

function Post() {

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_USERS' })
    }, [])

    return (
        <div className='forum-main'>
            <Header />
            <button onClick={() => { history.goBack() }} className="btn btn-outline-warning go-back">Go Back</button>
            <Comments />
        </div>
    );
}

export default Post;