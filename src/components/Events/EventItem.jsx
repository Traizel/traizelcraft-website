import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './Events.css';

function EventsItem({event}) {

    const history = useHistory();
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();

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
        <div>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <h6>Starts: {event.start_date} at {event.start_time}</h6>
            {buttons}
        </div>
    );
}

export default EventsItem;