import React from 'react';
import Holly from '../Components/Holly';
import Holly1 from '../Components/Holly1';


const Bollywood = () => {
    return (
        <div className='Bollywood'>
        <div className='B1'>
            <p className='B1_1'>Hollywood</p>
            <Holly /><br /><hr />
            <Holly /><br /><hr />
            <Holly /><br /><hr />
            <Holly /><br /><hr />
            <Holly /><br /><hr />
            <Holly /><br /><hr />
            <Holly /><br />
            <div className='g_2'>
                <span className="material-symbols-outlined">south</span>
                LOAD MORE
            </div>
        </div>
        <div className='B2'>
            <p className='B1_1'>Top Posts</p><br />
            <img id='B2_1' src="https://www.telugubulletin.com/wp-content/uploads/2022/11/Avatar-2-movie-on-hotstar.jpg" alt="" />
            <div className="B2_2">
                <div>
                    <h4>Jemes cameron's avatar 2 <br /> crosses $1 billion</h4> <br />
                    <div>
                        <b>Travel</b>
                        <span className='g_2'> / August 21, 2017</span>
                    </div>
                </div>
                <h1 style={{color:"lightGrey"}}>1</h1>
            </div>
            <br /><hr />
            <Holly1 serial='2' /><br /><hr />
            <Holly1 serial='3' /><br /><hr />
            <Holly1 serial='4' /><br /><br /><br /><br />
            <div className="B2_3">Advertisement</div>
        </div>
    </div>
    );
}

export default Bollywood;
