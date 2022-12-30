import React from 'react';
import Biryani from '../Components/Biryani';
import Biryani1 from '../Components/Biryani1';

const Bollywood = () => {
    return (
        <div className='Bollywood'>
            <div className='B1'>
                <p className='B1_1'>Food</p>
                <Biryani /><br /><hr />
                <Biryani /><br /><hr />
                <Biryani /><br /><hr />
                <Biryani /><br /><hr />
                <Biryani /><br /><hr />
                <Biryani /><br /><hr />
                <Biryani /><br />
                <div className='g_2'>
                    <span className="material-symbols-outlined">south</span>
                    LOAD MORE
                </div>
            </div>
            <div className='B2'>
                <p className='B1_1'>Top Posts</p><br />
                <img id='B2_1' src="https://i.ytimg.com/vi/C0rog4U2H10/maxresdefault.jpg" alt="" />
                <div className="B2_2">
                    <div>
                        <h4>Hyderabad Dum biryani <br /> famous around the world</h4> <br />
                        <div>
                            <b>Travel</b>
                            <span className='g_2'> / August 21, 2017</span>
                        </div>
                    </div>
                    <h1 style={{color:"lightGrey"}}>1</h1>
                </div>
                <br /><hr />
                <Biryani1 serial='2' /><br /><hr />
                <Biryani1 serial='3' /><br /><hr />
                <Biryani1 serial='4' /><br /><br /><br /><br />
                <div className="B2_3">Advertisement</div>
            </div>
        </div>
    );
}

export default Bollywood;
