import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import './Events.css';
import moment from 'moment';
import '../App/Bootstrap.css';

function EventsItem({event}) {

    const history = useHistory();
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();
    let startTime = event.start_time;
    let startDay = event.start_date;

    const formatTime = (time) => {

        let one = time[0];
        let two = time[1];
        let three = time[3];
        let four = time[4];

        // Determine AM or PM suffix based on the hour
        let suffix = (one === '1' && two < '3') ? "AM" : "PM";

        // Convert hour from military time
        if (one === '1' && two > '2') {
            one -= '1';
            two -= '2';
            one = one.toString();
            two = two.toString();
        }

        // If hour is 0, set it to 12
        if (one === '0' && two === '0') {
            one = '1';
            two = '2';
        }  

        let newTime = '';

        if (one === '0') {
            newTime = two + ':' + three + four + ' ' + suffix;
        } else if (one === '1') {
            newTime = one + two + ':' + three + four + ' ' + suffix;
        }

        // Return the formatted string
        return newTime;
    }

    const signUp = () => {
        dispatch({ type: 'ADD_CURRENT_EVENT', payload: event.id });
        dispatch({ type: 'GET_SIGN_UP', payload: event.id });
        setTimeout(function () { history.push('/sign-up') }, 300);
    }

    const cancelEvent = () => {
        dispatch({ type: 'DELETE_EVENT', payload: event.id });
        alert('Event Canceled!');
        dispatch({ type: 'GET_EVENTS' });
    }
    
    const viewDetails = () => {
        dispatch({ type: 'ADD_CURRENT_EVENT', payload: event.id });
        dispatch({ type: 'GET_DETAILS', payload: event.id });
        setTimeout(function () { history.push('/event-details') }, 300);
    }

    let buttons;
    if (user.access_level >= 3) {       
        buttons =   <>
            <button onClick={signUp} className="btn btn-primary btn-sm expand-btn">Sign Up</button>
            <button onClick={cancelEvent} className="btn btn-primary btn-sm expand-btn">Cancel Event</button>
            <button onClick={viewDetails} className="btn btn-primary btn-sm expand-btn">View Details</button>
                    </>
    } else if (user.id === event.author_id) {
        buttons =   <>
            <button onClick={signUp} className="btn btn-primary btn-sm expand-btn">Sign Up</button>
            <button onClick={cancelEvent} className="btn btn-primary btn-sm expand-btn">Cancel Event</button>
            <button onClick={viewDetails} className="btn btn-primary btn-sm expand-btn">View Details</button>
                    </>
    } else {
        buttons =   <>
            <button onClick={signUp} className="btn btn-primary btn-sm expand-btn">Sign Up</button>
                    </>
    }


    return (
        <Row>
            <Col sm={2}><h3>{event.title}</h3></Col>
            <Col sm={5}><p>{event.description}</p></Col>
            <Col sm={3}><h6>Starts: 
                <br />
                <br />
                {moment(startDay).format('ddd, MMM Do YYYY')} 
                <br />
                @ {formatTime(startTime)}</h6></Col>
            <Col sm={2}>{buttons}</Col>
        </Row>
    );
}

export default EventsItem;