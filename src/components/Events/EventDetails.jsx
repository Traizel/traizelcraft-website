import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Container } from 'react-bootstrap';
import './Events.css';

function EventDetails() {

    const history = useHistory();
    const details = useSelector(store => store.events.getDetails);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'GET_CURRENT_EVENT' });
        setTimeout(function () { dispatch({ type: 'GET_SESSION_DETAILS' }) }, 300);
    }, []);


    return (
        <div className='sign-up'>
            <h1>Signed up list:</h1>
            <Container>
                {details.map(signup =>
                    (
                    <Row key={signup.id}><p>Discord Name: <strong className='text-warning'>{signup.discord_name}</strong> | In Game Name: <strong className='text-warning'>{signup.in_game_name}</strong></p></Row>
                    )
                )}
            </Container>
            <button onClick={() => { history.goBack() }} className="btn btn-outline-warning go-back">Go Back</button>
        </div>
    );
}

export default EventDetails;