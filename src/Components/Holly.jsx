import React from 'react';
import { useNavigate } from 'react-router-dom';

const Holly = () => {
    const navigate = useNavigate();
    const openArticle=()=>{
        navigate('/ArticlePage');
    }
    return (
        <div className='Home' onClick={openArticle}>
        <img className='castle' src="https://wallpapercave.com/wp/vDy3sUb.jpg" alt="pic" />
        <div className='guide'>
            <h4>The best one lines and <br /> of the marvels</h4> <br />
            <span className='g_2'>Avengers endgame is a 2019 america <br /> super hero film based on the marvel..</    span><br />
            <div>                                                                                                     
                <b>Travel</b>
                <span className='g_2'> / August 21, 2017</span>
            </div>
        </div>
    </div>
    );
}

export default Holly;
