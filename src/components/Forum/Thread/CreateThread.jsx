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
                description: description,
                category: currentCategory,
                author: user.id,
            },
        });
        alert('Thread created successfully!');
        history.goBack();
    }; // end createEvent


    return (
        <div>
            <h1>Create Thread</h1>
            <form onSubmit={createThread}>
                <h4>Thread Subject:<input
                    placeholder='Subject'
                    type='text'
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                    required /></h4>

                <h4>Thread Description:<input
                    placeholder='Description'
                    type='text'
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    required /></h4>

                <button type='submit'>Add Thread</button>

            </form>
            <button onClick={() => { history.goBack() }}>Go Back</button>
        </div>
    );
}

export default CreateThread;