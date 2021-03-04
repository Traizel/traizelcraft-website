import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './News.css';
import { Row, Col } from 'react-bootstrap';

function NewsItem({ article }) {

    const history = useHistory();
    const user = useSelector(store => store.user);


    return (
        <Row>
            <Col sm={2}><img src={article.img_url}/></Col>
            <Col sm={2}><h3>{article.title}</h3></Col>
            <Col sm={8} className='small-text'><p>{article.description}</p></Col>
        </Row>
    );
}

export default NewsItem;