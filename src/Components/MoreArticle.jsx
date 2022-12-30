import React from 'react';
import mask from '../Pages/Images/mask.png'

const MoreArticle = () => {
    return (
        <div className="A3_2">
        <p className='lgText'>Also tagged Reactjs</p><br />
        <img className='A3_2_1' src="https://w0.peakpx.com/wallpaper/805/318/HD-wallpaper-national-park-joshua-tree-national-park-rock-sunbeam.jpg" alt="" />
        <div>
            <p className='j_2'>Joshua Tree <br /> Overnight Adventure</p><br />
            <div className="A2_1">
                <img src={mask} alt="mask" className='mask' />
                <div>
                    <p className='A2_1_1'>Dmitry Nozhenko</p>
                    <p className='lgText'>Aug 10- 4 min read</p>
                </div>
            </div>
        </div>
    </div> 
    );
}

export default MoreArticle;
