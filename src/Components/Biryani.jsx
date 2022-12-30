import React from 'react';
import { useNavigate } from 'react-router-dom';

const Pavan = () => {
    const navigate = useNavigate();
    const openArticle=()=>{
        navigate('/ArticlePage');
    }
    return (
        <div className='Home' onClick={openArticle}>
        <img className='castle' src="https://i.pinimg.com/originals/24/ac/bb/24acbb7530fb22151d3f3f1581fb947d.png" alt="pic" />
        <div className='guide'>
            <h4>A style of biryani <br /> from Hyderabad</h4> <br />
            <span className='g_2'>Hyderabadi biryani is a style of biryani <br/> from hyderabad india made..</    span><br/>
            <div>
                <b>Article</b>
                <span className='g_2'> / May 21, 2010</span>
            </div>
        </div>
    </div>
    );
}

export default Pavan;
