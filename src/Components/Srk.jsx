import React from 'react';
import { useNavigate } from 'react-router-dom';

const Srk = () => {
    const navigate = useNavigate();
    const openArticle=()=>{
        navigate('/ArticlePage');
    }
    return (
        <div className='Home' onClick={openArticle}>
        <img className='castle' src="https://pbs.twimg.com/media/EDK2mF8XUAEeLZb?format=jpg&name=small" alt="pic" />
        <div className='guide'>
            <h4>Prabhas saho movie <br /> in bollywood</h4> <br />
            <span className='g_2'>Indian action film written and directed  <br /> sujeeth tollywood actor prabhas ... </    span><br />
            <div>                                                                                                             
                <b>Travel</b>
                <span className='g_2'> / August 21, 2017</span>
            </div>
        </div>
    </div>
    );
}

export default Srk;
