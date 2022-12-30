import React from 'react';
import Srk from '../Components/Srk';
import Srk1 from '../Components/Srk1';

const Bollywood = () => {
    return (
        <div className='Bollywood'>
        <div className='B1'>
            <p className='B1_1'>Bollywood</p>
            <Srk /><br /><hr />
            <Srk /><br /><hr />
            <Srk /><br /><hr />
            <Srk /><br /><hr />
            <Srk /><br /><hr />
            <Srk /><br /><hr />
            <Srk /><br />
            <div className='g_2'>
                <span className="material-symbols-outlined">south</span>
                LOAD MORE
            </div>
        </div>
        <div className='B2'>
            <p className='B1_1'>Top Posts</p><br />
            <img id='B2_1' src="https://wallpaperaccess.com/full/3709528.jpg" alt="" />
            <div className="B2_2">
                <div>
                    <h4>He is Succesfull on <br /> his own term</h4> <br />
                    <div>
                        <b>Travel</b>
                        <span className='g_2'> / August 21, 2017</span>
                    </div>
                </div>
                <h1 style={{color:"lightGrey"}}>1</h1>
            </div>
            <br /><hr />
            <Srk1 serial='2' /><br /><hr />
            <Srk1 serial='3' /><br /><hr />
            <Srk1 serial='4' /><br /><br /><br /><br />
            <div className="B2_3">Advertisement</div>
        </div>
    </div>
    );
}

export default Bollywood;
