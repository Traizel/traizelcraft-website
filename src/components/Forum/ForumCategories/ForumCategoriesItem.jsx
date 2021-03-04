import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

function ForumCategoriesItem({ category }) {

    const dispatch = useDispatch();
    const history = useHistory()

    useEffect(() => {
        dispatch({ type: 'FETCH_USERS' })
    }, [])

    const toThread = () => {
        dispatch({ type: 'FETCH_THREADS', payload: category.id});
        dispatch({ type: 'ADD_CURRENT_CATEGORY', payload: category.id });
        setTimeout(function () { history.push('./thread') }, 300 );
    }

    return (
        <Row onClick={toThread} className='forum-item'>
            <Col sm={4}><h2>{category.title}</h2></Col>
            <Col sm={8}><p>{category.description}</p></Col>
        </Row>
    );
}

export default ForumCategoriesItem;