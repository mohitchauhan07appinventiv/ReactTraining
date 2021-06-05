import React from 'react';
import './index.css';
export default function CircularImg(props){
    return(
        <div className='circularBorder'>
            <img src={props.src} alt={'imageIcon'} />
            {/* <h3>{props.title}</h3> */}
        </div>
    );
}