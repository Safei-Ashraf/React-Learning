import React from 'react';
import './ImagesList.css';

const ImagesList = ({ images}) => {
    const displayImages = images.map(img =>{
    return(<img src={img.urls.thumb} key={img.id} alt={img.alt_description}/>)
    });
    return(<div className="images-list">
    {displayImages}</div>);
}

export default ImagesList;