import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    Summer: {
        text: `Wow!, Thats hooot!`,
        icon: 'sun'
    },
    Winter:{
        text: `Burr, that's Cold!`,
        icon:'snowflake'
    }
}

const getSeason = (lat, month)=>{
    if(month > 2 && month < 9)
    {
        return lat>0? 'Summer': 'Winter'
    }
    else{
        return lat>0? 'Winter' : 'Summer';
    }
}

const SeasonDisplay = ({ lat }) => {
    const season = getSeason(lat, new Date().getMonth());
    const {text, icon} = seasonConfig[season];
    return (<>
        <div className={`season-display ${season}`}>
        <i className={`${icon} icon massive icon-left`}></i>
        <h2>{text}</h2>
        <i className={`${icon} icon massive icon-right`}></i>
        </div>
    </>  );

    
}
 
export default SeasonDisplay   ;