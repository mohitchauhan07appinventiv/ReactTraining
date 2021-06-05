import React from 'react';
import './index.css'

export default function WhyBuySellContent(props){
    return(
        <div className={'mainContainer'}>
            <div className={'TitleSection'}>
                <img src={props.imageSrc} alt={'lock/chatIcon'} />
                <h3>{props.title}</h3>
            </div>
            <p>{props.text}</p>
        </div>
    );
}