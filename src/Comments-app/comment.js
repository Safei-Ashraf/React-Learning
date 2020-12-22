import React from 'react';

const Comment = ({ name, time, image, content }) => {
    return ( 
            <>
                <div className="comment">
                <a href="/" className="avatar">
                    <img src={image} alt="avatar"/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {name}
                    </a>
                </div>
                <div className="metadata">
                    <span className="date">{time}</span>
                </div>
                <div className="text">{content}</div>
                </div>
            </>
            );} 
export default Comment;