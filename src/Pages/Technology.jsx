import React from 'react';
import Ai from '../Components/Ai';
import Ai1 from '../Components/Ai1';


const Bollywood = () => {
    return (
        <div className='Bollywood'>
        <div className='B1'>
            <p className='B1_1'>Technology</p>
            <Ai /><br /><hr />
            <Ai /><br /><hr />
            <Ai /><br /><hr />
            <Ai /><br /><hr />
            <Ai /><br /><hr />
            <Ai /><br /><hr />
            <Ai /><br />
            <div className='g_2'>
                <span className="material-symbols-outlined">south</span>
                LOAD MORE
            </div>
        </div>
        <div className='B2'>
            <p className='B1_1'>Top Posts</p><br />
            <img id='B2_1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoqYm9JgQakauGIElk3opcZosMtMMmGKCQJQ&usqp=CAU" alt="" />
            <div className="B2_2">
                <div>
                    <h4>Top lists fastest growing  <br /> skills and technoligy </h4> <br />
                    <div>
                        <b>Travel</b>
                        <span className='g_2'> / August 21, 2017</span>
                    </div>
                </div>
                <h1 style={{color:"lightGrey"}}>1</h1>
            </div>
            <br /><hr />
            <Ai1 serial='2' /><br /><hr />
            <Ai1 serial='3' /><br /><hr />
            <Ai1 serial='4' /><br /><br /><br /><br />
            <div className="B2_3">Advertisement</div>
        </div>
    </div>   
    );
}

export default Bollywood;
