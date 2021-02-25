import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ThreadItem from './ThreadItem';
import { useHistory } from 'react-router-dom';

function Thread() {

    const currentCategory = useSelector(store => store.current.CurrentCategoryReducer);
    const threads = useSelector(store => store.form.ForumThreadsReducer);
    const history = useHistory()
    console.log(currentCategory);
    console.log(threads);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_THREADS', payload: currentCategory });
    }, [])

    const createThread = () => {
        history.push('/create-thread');
    }

    return (
        <div >
            <h1>TraizelCraft Forums</h1>
            <button onClick={createThread}>Create Thread</button>
            <div>
                {threads.map(thread =>
                    (<ThreadItem thread={thread} key={thread.id} />)
                )}
            </div>
        </div>
    );
}

export default Thread;