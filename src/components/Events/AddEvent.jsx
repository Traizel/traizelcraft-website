import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Events.css';
import { useDispatch } from 'react-redux';

function AddEvent() {

    const history = useHistory();
    const user = useSelector(store => store.userReducer);
    const dispatch = useDispatch();


    return (
        <div className='events-section'>
            <h1>Add Event</h1>
            <div className='events-page-image'>
                <img src="./images/Oasis1.JPG" />
            </div>
            <form className='add-event-form'>
                <h4>Event Title:<input placeholder='Title' type='text'/></h4>
                <h4>Event Description:<input placeholder='Description' type='text' /></h4>
                <h4>Event Start Time:<input placeholder='Time' type='time' /></h4>
                <h4>Event Start Day:<input placeholder='Date' type='date' /></h4>
            </form>
            <button onClick={() => {history.push('/events')}}>Go Back</button>
        </div>
    );
}

export default AddEvent;