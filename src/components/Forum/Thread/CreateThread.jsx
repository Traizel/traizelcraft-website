import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function CreateThread() {

    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');
    const currentCategory = useSelector(store => store.current.CurrentCategoryReducer);
    const history = useHistory();
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();


    const createThread = (event) => {
        event.preventDefault();

        dispatch({
            type: 'ADD_THREAD',
            payload: {
                subject: subject,
                text: description,
                category: currentCategory,
                author: user.id,
            },
        });
        alert('Thread created successfully!');
        history.goBack();
    }; // end createEvent


    return (
        <div className='forum-main add-event'>
            <h1>Create Thread</h1>
            <form onSubmit={createThread}>
                <h4>Thread Subject:</h4>
                <input
                    className="form-control"
                    placeholder='Subject'
                    type='text'
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                    required />

                <h4>Thread Description:</h4>
                <input
                    className="form-control"
                    placeholder='Description'
                    type='text'
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    required />
                    <br />
                    <br />

                <button type='submit' className="btn btn-outline-success">Add Thread</button>

            </form>
            <br />
            <button onClick={() => { history.goBack() }} className="btn btn-outline-warning go-back">Go Back</button>
            <br />
        </div>
    );
}

export default CreateThread;