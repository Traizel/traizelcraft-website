import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './News.css';
import { useDispatch } from 'react-redux';

function AddNews() {

    const history = useHistory();
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();


    return (
        <div className='news-section'>
            <h1>Add Article</h1>
            <div className='news-page-image'>
                <img src="./images/TraizelStatue1.JPG" />
            </div>
            <form className='add-article-form'>
                <h4>Article Title:<input placeholder='Title' type='text' /></h4>
                <h4>Article Description:<input placeholder='Description' type='text' /></h4>
            </form>
            <button onClick={() => { history.push('/news') }}>Go Back</button>
        </div>
    );
}

export default AddNews;