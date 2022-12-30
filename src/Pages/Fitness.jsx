import React from 'react';
import Fit from '../Components/Fit';
import Fit1 from '../Components/Fit1';


const Bollywood = () => {
    return (
        <div className='Bollywood'>
            <div className='B1'>
                <p className='B1_1'>Fitness</p>
                <Fit /><br /><hr />
                <Fit /><br /><hr />
                <Fit /><br /><hr />
                <Fit /><br /><hr />
                <Fit /><br /><hr />
                <Fit /><br /><hr />
                <Fit /><br />
                <div className='g_2'>
                    <span className="material-symbols-outlined">south</span>
                    LOAD MORE
                </div>
            </div>
            <div className='B2'>
                <p className='B1_1'>Top Posts</p><br />
                <img id='B2_1' src="https://c4.wallpaperflare.com/wallpaper/206/268/839/pose-muscle-muscle-rod-press-hd-wallpaper-preview.jpg" alt="" />
                <div className="B2_2">
                    <div>
                        <h4>Exercise gives you  <br /> desirable body shape</h4> <br />
                        <div>
                            <b>Travel</b>
                            <span className='g_2'> / August 21, 2017</span>
                        </div>
                    </div>
                    <h1 style={{color:"lightGrey"}}>1</h1>
                </div>
                <br /><hr />
                <Fit1 serial='2' /><br /><hr />
                <Fit1 serial='3' /><br /><hr />
                <Fit1 serial='4' /><br /><br /><br /><br />
                <div className="B2_3">Advertisement</div>
            </div>
        </div>
    );
}

export default Bollywood;
