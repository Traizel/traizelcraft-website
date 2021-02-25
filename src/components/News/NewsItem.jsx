import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './News.css';

function NewsItem({ article }) {

    const history = useHistory();
    const user = useSelector(store => store.user);


    return (
        <div>
            <img src={article.img_url}/>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
        </div>
    );
}

export default NewsItem;