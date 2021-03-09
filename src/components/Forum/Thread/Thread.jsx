import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ThreadItem from './ThreadItem';
import { useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from '../ForumHeader/ForumHeader';

function Thread() {

    const threads = useSelector(store => store.form.ForumThreadsReducer);
    const user = useSelector(store => store.user);
    const history = useHistory();
    console.log(threads);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'GET_CURRENT_CATEGORY'});
        setTimeout(function () { dispatch({ type: 'GET_SESSION_THREADS' }) }, 300);
    }, [])

    const createThread = () => {
        history.push('/create-thread');
    }

    let buttons = <button onClick={() => { history.goBack() }} className="btn btn-outline-warning go-back">Go Back</button>

    if (user.id) {
        buttons = 
        <>
            <button onClick={() => { history.goBack() }} className="btn btn-outline-warning go-back">Go Back</button>
            <button onClick={createThread} className="btn btn-outline-info">Create Thread</button>
        </>
    }

    return (
        <div className='forum-main'>
            <Header />
            {buttons}
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