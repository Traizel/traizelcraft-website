import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import moment from 'moment';

function ForumThreadsItem({ thread }) {

    const dispatch = useDispatch();
    const history = useHistory()

    useEffect(() => {
        dispatch({ type: 'FETCH_USERS' })
    }, [])

    const toPost = () => {
        dispatch({ type: 'FETCH_COMMENTS', payload: thread.id });
        dispatch({ type: 'ADD_CURRENT_THREAD', payload: thread.id })
        setTimeout(function () { history.push('./post') }, 300);
    }

    return (
        <Row onClick={toPost} className='forum-item'>
            <Col sm={9}><h2 className='more-margin text-warning'>{thread.title}</h2></Col>
            <Col sm={3}><p>Posted:
                <br />
                {moment(thread.timestamp).fromNow()}</p></Col>
        </Row>
    );
}

export default ForumThreadsItem;