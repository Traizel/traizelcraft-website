import { Row, Col } from 'react-bootstrap';
import moment from 'moment';

function CommentsItem({ comment }) {

    return (
        <Row>
            <Col sm={10}>{comment.text}</Col>
            <Col sm={2}>Posted:
            <br />
            {moment(comment.timestamp).fromNow()}</Col>
        </Row>
    );
}

export default CommentsItem;