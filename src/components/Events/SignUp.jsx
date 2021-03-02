import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './Events.css';

function SignUpForm() {

    const [discord, setDiscord] = useState('');
    const [inGame, setInGame] = useState('');
    const history = useHistory();
    const user = useSelector(store => store.user);
    const eventId = useSelector(store => store.current.CurrentEventReducer);
    const currentEvent = useSelector(store => store.events.getSignUp);
    const dispatch = useDispatch();

    const signUp = (event) => {
        event.preventDefault();

        dispatch({
            type: 'SIGN_UP',
            payload: {
                discord: discord,
                inGame: inGame,
                event: eventId,
                user: user.id,
            },
        });
        alert('Successfully signed up!');
        history.goBack();
    }

    useEffect(() => {
        dispatch({ type: 'GET_CURRENT_EVENT' });
        dispatch({ type: 'GET_SIGN_UP', payload: eventId });
    }, [])


    return (
        <div>
            <h1>Signing Up for {currentEvent.title}</h1>
            <form className='add-event-form' onSubmit={signUp}>
                <h4>Discord Name:<input
                    placeholder='Discord Name'
                    type='text'
                    value={discord}
                    onChange={(event) => setDiscord(event.target.value)}
                    required /></h4>

                <h4>In Game Username:<input
                    placeholder='In Game Name'
                    type='text'
                    value={inGame}
                    onChange={(event) => setInGame(event.target.value)}
                    required /></h4>

                <button type='submit'>Sign Up</button>

            </form>
            <button onClick={() => { history.goBack() }}>Go Back</button>
        </div>
    );
}

export default SignUpForm;