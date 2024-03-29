import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Events.css';
import { useDispatch } from 'react-redux';
import EventsItem from './EventItem';
import { Container } from 'react-bootstrap';

function Events() {

    const history = useHistory();
    const user = useSelector(store => store.user);
    const events = useSelector(store => store.events);
    const dispatch = useDispatch();
    console.log('events', events);

    useEffect(() => {
        dispatch({ type: 'GET_EVENTS' });
    }, [])

    let newEventButton;
    if (user.access_level >= 1) {
        newEventButton = <button className="btn btn-outline-secondary" onClick={() => { history.push('/add-event') }}>New Event</button>;
    } else {
        newEventButton = <></>
    }


    return (
        <div className='events-section'>
            <div className='header'>
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
            {newEventButton}
            </div>
                <Container>
                {events.getEvents.map(event =>
                    (<EventsItem event={event} key={event.id} />)
                )}
                </Container>
            <div className='white-space'><h1>-</h1></div>
        </div>
    );
}

export default Events;