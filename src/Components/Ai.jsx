import React from 'react';
import { useNavigate } from 'react-router-dom';

const Ai = () => {
    const navigate = useNavigate();
    const openArticle=()=>{
        navigate('/ArticlePage');
    }
    return (
        <div className='Home' onClick={openArticle}>
        <img className='castle' src="https://c0.wallpaperflare.com/preview/570/38/521/artificial-intelligence-technology-futuristic-science.jpg" alt="pic" />
        <div className='guide'>
            <h4>AI & MI Top list faster <br /> growing skill</h4> <br />
            <span className='g_2'>The work is innovative,experience <br /> magic, AI are building amazing .</    span><br />
            <div>                                                                                                           
                <b>Travel</b>
                <span className='g_2'> / August 21, 2017</span>
            </div>
        </div>
    </div>
    );
}

export default Ai;
