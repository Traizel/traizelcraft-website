import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './News.css';
import { useDispatch } from 'react-redux';

function News() {

    const history = useHistory();
    const user = useSelector(store => store.userReducer);
    const dispatch = useDispatch();


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
            <button>New Article</button>
            <div className='news-list'>

            </div>
        </div>
    );
}

export default News;