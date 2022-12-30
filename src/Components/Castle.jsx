import React from 'react';
import { useNavigate } from 'react-router-dom';


const Castle = (props) => {
    const navigate = useNavigate();
    const openArticle = () =>{
        navigate('ArticlePage');
    }
    return (
        <div className="B2_2" onClick={openArticle}>
            <img className='castle2' src="https://thumbs.dreamstime.com/b/golconda-fort-undoubtedly-one-most-magnificent-fortress-complexes-india-history-goes-back-to-early-th-century-228497890.jpg" alt="pic" />
            <div className='B2_2_1'>
                <h4>Catch waves with an <br /> adventure guide</h4> <br />
                <div>
                    <b>Travel</b>
                    <span className='g_2'> / August 21, 2017</span>
                </div>
            </div>
            <h1 style={{color:"lightGrey"}}>{props.serial}</h1>
        </div>
    );
}

export default Castle;
