import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Events.css';

function EventsItem({event}) {

    const history = useHistory();
    const user = useSelector(store => store.user);


    return (
        <div>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <h6>Starts: {event.start_date} at {event.start_time}</h6>
        </div>
    );
}

export default EventsItem;