import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Events.css';
import { useDispatch } from 'react-redux';
import EventsItem from './EventItem';

function Events() {

    const history = useHistory();
    const user = useSelector(store => store.user);
    const events = useSelector(store => store.events);
    const dispatch = useDispatch();
    console.log('events', events);

    useEffect(() => {
        dispatch({ type: 'GET_EVENTS' });
    }, [])


    return (
        <div className='events-section'>
            <h1>Events</h1>
            <div className='events-page-image'>
                <img src="./images/Oasis1.JPG" />
            </div>
            <div>
                <p>The events page is a list of any upcoming events posted Traizel and any collaborators. 
                    Anyone can sign up for an event and participate! Please make sure to read the description
                    of each event before signing up. Some events recommend filling out your Discord and/or 
                    In-Game name that you use (Xbox, PS4, Steam, etc).</p>
            </div>
            <button onClick={() => {history.push('/add-event')}}>New Event</button>
            <div className='events-list'>
                {events.getEvents.map(event =>
                    (<EventsItem event={event} key={event.id} />)
                )}
            </div>
        </div>
    );
}

export default Events;