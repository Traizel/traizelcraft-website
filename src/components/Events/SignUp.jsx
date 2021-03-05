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
        dispatch({ type: 'GET_SESSION_SIGN_UP' });
    }, [])


    return (
        <div className='sign-up'>
            <h1>Signing Up for {currentEvent[0] ? currentEvent[0].title : 'N/A'}</h1>
            <form className='add-event-form' onSubmit={signUp}>
                <br />
                <h4>Discord Name (Please include Hashtags): </h4>
                    <input
                    className='form-control'
                    placeholder='Example: Username#1234'
                    type='text'
                    value={discord}
                    onChange={(event) => setDiscord(event.target.value)}
                    required />
                    <br />

                <h4>In Game Username: </h4>
                    <input
                    className='form-control'
                    placeholder='Example: Username_1234'
                    type='text'
                    value={inGame}
                    onChange={(event) => setInGame(event.target.value)}
                    required />
                    <br />

                <button type='submit' className="btn btn-outline-success go-back">Sign Up</button>

            </form>
            <button onClick={() => { history.goBack() }} className="btn btn-outline-warning go-back">Go Back</button>
        </div>
    );
}

export default SignUpForm;