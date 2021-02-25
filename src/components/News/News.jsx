import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import './News.css';
import { useDispatch } from 'react-redux';
import NewsItem from './NewsItem';

function News() {

    const history = useHistory();
    const user = useSelector(store => store.user);
    const news = useSelector(store => store.news);
    console.log('News:', news);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'GET_NEWS' });
    }, [])

    let newArticleButton;
    if (user.access_level >= 3) {
        newArticleButton = <button onClick={() => { history.push('./add-article') }}>New Article</button>;
    } else {
        newArticleButton = <></>
    }

    return (
        <div className='news-section'>
            <h1>News</h1>
            <div className='news-page-image'>
                <img src="./images/TraizelStatue1.JPG" />
            </div>
            <div>
                <p>The news page is a list of all up to date info on TraizelCraft Network! 
                    Come here for updates, patch notes, future plans, teasers, and more!</p>
            </div>
            {newArticleButton}
            <div className='news-list'>
                {news.getNews.map(article =>
                    (<NewsItem article={article} key={article.id} />)
                )}
            </div>
        </div>
    );
}

export default News;