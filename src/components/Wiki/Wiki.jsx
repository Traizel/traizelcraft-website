import { useHistory } from 'react-router-dom';

function Faq() {

    const history = useHistory();

    return (
        <div className='policy-section'>
            <div className='header'>
                <h1>TraizelCraft Wiki</h1>
                <div className='news-page-image'>
                    <img src="./images/Landscape2.JPG" />
                </div>
            </div>
            <br />
            <br />
            <div className='sign-up'>
                <h1 className="text-danger">COMING SOON!</h1>
                <br />
                
            </div>
        </div>
    );
}

export default Faq;