import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Events.css';
import { useDispatch } from 'react-redux';

function AddEvent() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [startTime, setStartTime] = useState('');
    const [startDay, setStartDay] = useState('');
    const history = useHistory();
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();


        const createEvent = (event) => {
            event.preventDefault();

            dispatch({
                type: 'ADD_EVENT',
                payload: {
                    title: title,
                    description: description,
                    time: startTime,
                    day: startDay,
                    author: user.id,
                },
            });
            alert('Event created successfully!');
            history.goBack();
        }; // end registerUser


    return (
        <div className='events-section'>
            <h1>Add Event</h1>
            <div className='events-page-image'>
                <img src="./images/Oasis1.JPG" />
            </div>
            <form className='add-event-form' onSubmit={createEvent}>
                <h4>Event Title:<input 
                placeholder='Title' 
                type='text'
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                required/></h4>

                <h4>Event Description:<input 
                placeholder='Description' 
                type='text'
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                required /></h4>

                <h4>Event Start Time:<input 
                placeholder='Time' 
                type='time'
                value={startTime}
                onChange={(event) => setStartTime(event.target.value)}
                required/></h4>

                <h4>Event Start Day:<input 
                placeholder='Date' 
                type='date' 
                value={startDay}
                onChange={(event) => setStartDay(event.target.value)}
                required/></h4>

                <button type='submit'>Create Event</button>

            </form>
            <button onClick={() => {history.push('/events')}}>Go Back</button>
        </div>
    );
}

export default AddEvent;