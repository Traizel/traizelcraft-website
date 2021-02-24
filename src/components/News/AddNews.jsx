import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './News.css';
import { useDispatch } from 'react-redux';
import ReactFilestack from 'react-filestack';

function AddNews() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imgName, setImgName] = useState('');
    const [imgURL, setImgURL] = useState('');
    const history = useHistory();
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();
    const api_key = process.env.REACT_APP_FILESTACK_API_KEY;


    const createNews = (event) => {
        event.preventDefault();

        dispatch({
            type: 'ADD_NEWS',
            payload: {
                title: title,
                description: description,
                author: user.id,
                img_name: imgName,
                img_url: imgURL,
            },
        });
        alert('Article created successfully!');
        history.goBack();
    }; // end createNews

    const basicOptions = {
        accept: ['image/*'],
        maxSize: 1024 * 1024,
        maxFiles: 1,
    }
    const onSuccess = (result) => {
        console.log('Result from filestack success: ', result);
        setImgName(result.filesUploaded[0].filename);
        setImgURL(result.filesUploaded[0].url);
    }

    const onError = (error) => {
        alert('Error Uploading' + error)
        console.error('error', error);
    }


    return (
        <div className='news-section'>
            <h1>Add Article</h1>
            <div className='news-page-image'>
                <img src="./images/TraizelStatue1.JPG" />
            </div>
            <form className='add-article-form' onSubmit={createNews}>
                <h4>Article Title:<input 
                placeholder='Title' 
                type='text' 
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                required/></h4>

                <h4>Article Description:<input 
                placeholder='Description' 
                type='text' 
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                required/></h4>

                <ReactFilestack
                    apikey={api_key}
                    buttonText="Upload Image"
                    options={basicOptions}
                    onSuccess={onSuccess}
                    onError={onError}
                />
                <button type='submit'>Create Article</button>
            </form>
            <button onClick={() => { history.push('/news') }}>Go Back</button>
        </div>
    );
}

export default AddNews;