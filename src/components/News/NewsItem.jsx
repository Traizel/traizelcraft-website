import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './News.css';
import { Row, Col } from 'react-bootstrap';
import moment from 'moment';

function NewsItem({ article }) {

    const history = useHistory();
    const user = useSelector(store => store.user);


    return (
    <>
        <Row className='inline'>  
                    <img src={article.img_url} className='news-img'/>  
        </Row>
        <Row className='inline'>
            <Col>
                <Row>
                    <Col sm={2} className="news-title text-warning"><h3>{article.title}</h3></Col>
                    <Col sm={8} className='news-p'><p>{article.description}</p></Col>
                    <Col sm={2} className="text-info"><p>{moment(article.timestamp).format('MMM Do, YYYY')}</p></Col>
                </Row>
            </Col>
        </Row>
    </>
    );
}

export default NewsItem;