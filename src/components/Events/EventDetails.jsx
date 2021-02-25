import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './Events.css';

function EventDetails() {

    const history = useHistory();
    const user = useSelector(store => store.user);
    const eventId = useSelector(store => store.current.CurrentEventReducer);
    const details = useSelector(store => store.events.getDetails);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'GET_DETAILS', payload: eventId });
    }, [])


    return (
        <div>
            <h1>Signed up list:</h1>
            <ul>
                {details.map(signup =>
                    (
                        <li key={signup.id}>Discord Name: {signup.discord_name} --- In Game Name: {signup.in_game_name}</li>
                    )
                )}
            </ul>
            <button onClick={() => {history.goBack()}}>Go Back</button>
        </div>
    );
}

export default EventDetails;