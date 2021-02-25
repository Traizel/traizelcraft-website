import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './Events.css';

function EventsItem({event}) {

    const history = useHistory();
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();

    const signUp = () => {
        dispatch({ type: 'SET_CURRENT_SIGN_UP', payload: event.id });
        history.push('/sign-up')
    }


    return (
        <div>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <h6>Starts: {event.start_date} at {event.start_time}</h6>
            <button onClick={signUp}>Sign Up</button>
        </div>
    );
}

export default EventsItem;