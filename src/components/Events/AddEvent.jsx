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
        }; // end createEvent


    return (
        <div className='add-event'>
        <div className='event-header'>
            <h1>Add Event</h1>
            <div className='events-page-image'>
                <img src="./images/Oasis1.JPG" />
            </div>
        </div>
            <form className='add-event-form' onSubmit={createEvent}>
                <div className="form-group">
                <h4>Event Title: </h4>
                <input 
                className='form-control'
                placeholder='Title' 
                type='text'
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                required/>
                </div>

                <div className="form-group">
                <h4>Event Description: </h4>
                <input
                className='form-control'
                placeholder='Description' 
                type='text'
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                required />
                </div>

                <div className="form-group">
                <h4>Event Start Time: </h4> 
                <input 
                className='form-control'
                placeholder='Time' 
                type='time'
                value={startTime}
                onChange={(event) => setStartTime(event.target.value)}
                required/>
                </div>

                <div className="form-group">
                <h4>Event Start Day: </h4>
                <input 
                className='form-control'
                placeholder='Date' 
                type='date' 
                value={startDay}
                onChange={(event) => setStartDay(event.target.value)}
                required/>
                </div>

                <button type='submit' className="btn btn-outline-success">Create Event</button>

            </form>
            <button onClick={() => { history.push('/events') }} className="btn btn-outline-warning go-back">Go Back</button>
        </div>
    );
}

export default AddEvent;