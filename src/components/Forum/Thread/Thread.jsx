import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ThreadItem from './ThreadItem';
import { useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from '../ForumHeader/ForumHeader';

function Thread() {

    const threads = useSelector(store => store.form.ForumThreadsReducer);
    const history = useHistory();
    console.log(threads);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'GET_CURRENT_CATEGORY'});
    }, [])

    const createThread = () => {
        history.push('/create-thread');
    }

    return (
        <div className='forum-main'>
            <Header />
            <button onClick={() => { history.goBack() }} className="btn btn-outline-warning go-back">Go Back</button>
            <button onClick={createThread} class="btn btn-outline-info">Create Thread</button>
            <Container>
                {threads.map(thread =>
                    (<ThreadItem thread={thread} key={thread.id} />)
                )}
            </Container>
            <div className='white-space'><h1>-</h1></div>
        </div>
    );
}

export default Thread;