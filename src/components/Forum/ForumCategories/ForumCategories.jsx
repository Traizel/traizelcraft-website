import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ForumCategoriesItem from './ForumCategoriesItem';
import { Container } from 'react-bootstrap';
import Header from '../ForumHeader/ForumHeader';

function ForumCategories() {

    const categories = useSelector(store => store.form.ForumCategoriesReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_CATEGORIES'});
    }, [])

    return (
        <div className='forum-main'>
            <Header />
            <Container>
                {categories.map(category =>
                ( <ForumCategoriesItem category={category} key={category.id}/> )
                )}
            </Container>
            <div className='white-space'><h1>-</h1></div>
        </div>
    );
}

export default ForumCategories;