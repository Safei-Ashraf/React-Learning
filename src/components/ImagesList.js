import React from 'react';

const ImagesList = ({ images}) => {
    const displayImages = images.map(img =>{
    return(<img src={img.urls.thumb} key={img.id} alt={img.alt_description}/>)
    });
    return(<div>
    {displayImages}</div>);
}

export default ImagesList;