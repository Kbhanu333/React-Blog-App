import React from 'react';
import { useNavigate } from 'react-router-dom';

const Fit = () => {
    const navigate = useNavigate();
    const openArticle=()=>{
        navigate('/ArticlePage');
    }
    return (
        <div className='Home' onClick={openArticle}>
        <img className='castle' src="https://c4.wallpaperflare.com/wallpaper/599/689/236/machine-dwayne-johnson-the-rock-workout-wallpaper-preview.jpg" alt="pic" />
        <div className='guide'>
            <h4>Exercise combats health<br /> conditions , deseases</h4> <br />
            <span className='g_2'>Exercise can help prevent excess weight <br />loss, when you engage in physically...</    span><br />
            <div>                                                       8                                                   8
                <b>Travel</b>
                <span className='g_2'> / August 21, 2017</span>
            </div>
        </div>
    </div>
    );
}

export default Fit;
