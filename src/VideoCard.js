import React from 'react'
import { Avatar } from '@material-ui/core'
import './VideoCard.css';

function VIdeoCard({image,title,channel,timestamp,views,channelImage}) {
    return (
        <div className="videoCard">
                {/* <h3>Video</h3> */}
                <img className="videoCard__thumbnail" src={image} alt="" />
                <div className="videoCard__info">
                <Avatar className="videoCard__avatar" alt={channel} src={channelImage}/>    
                <div className="videoCard__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} * {timestamp}
                </p>
                </div>
            </div>
        </div>
    )
}

export default VIdeoCard
