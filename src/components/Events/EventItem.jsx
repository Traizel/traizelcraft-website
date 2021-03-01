import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import './Events.css';
import moment from 'moment';

function EventsItem({event}) {

    const history = useHistory();
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();
    let startTime = moment().format(event.start_time);
    let startDay = moment().format(event.start_date);

    const signUp = () => {
        dispatch({ type: 'SET_CURRENT_EVENT', payload: event.id });
        history.push('/sign-up')
    }

    const cancelEvent = () => {
        dispatch({ type: 'DELETE_EVENT', payload: event.id });
        alert('Event Canceled!');
        dispatch({ type: 'GET_EVENTS' });
    }

    const viewDetails = () => {
        dispatch({ type: 'SET_CURRENT_EVENT', payload: event.id });
        history.push('/event-details')
    }

    let buttons;
    if (user.access_level >= 3) {       
        buttons =   <>
                        <button onClick={signUp}>Sign Up</button>
                        <button onClick={cancelEvent}>Cancel Event</button>
                        <button onClick={viewDetails}>View Details</button>
                    </>
    } else if (user.id === event.author_id) {
        buttons =   <>
                        <button onClick={signUp}>Sign Up</button>
                        <button onClick={cancelEvent}>Cancel Event</button>
                        <button onClick={viewDetails}>View Details</button>
                    </>
    } else {
        buttons =   <>
                        <button onClick={signUp}>Sign Up</button>
                    </>
    }


    return (
        <Row>
            <Col sm><h3>{event.title}</h3></Col>
            <Col sm><p>{event.description}</p></Col>
            <Col sm><h6>Starts: {startDay} at {startTime}</h6></Col>
            <Col sm>{buttons}</Col>
        </Row>
    );
}

export default EventsItem;