import React from 'react';
import { useNavigate } from 'react-router-dom';

const Srk1 = (props) => {
    const navigate = useNavigate();
    const openArticle = () =>{
        navigate('/ArticlePage')
    }
    return (
        <div className="B2_2" onClick={openArticle}>
        <img className='castle2' src="https://images.indiawords.com/wp-content/uploads/2017/11/nice-looking-image-of-salman-khan.jpg" alt="pic" />
        <div style={{fontSize: "small"}}>
            <h5>Bhai supports  <br /> formers family</h5> <br />
            <div>
                <b>Travel</b>
                <span className='g_2'> / August 21, 2017</span>
            </div>
        </div>
        <h1 style={{color:"lightGrey"}}>{props.serial}</h1>
    </div>   
    );
}

export default Srk1;
