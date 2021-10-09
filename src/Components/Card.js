import React from 'react'
import './Card.css'
import Avatar from './Avatar'

function Card() {
    return (
        <div className = 'Card'>
            <div className ='upper-area'>
                <Avatar/>
                <h3> John Doe </h3> 
            </div>
            <div className = "lower-area">
            <p> I am a web developer. I love designing new user-interfaces and making them responsible. </p>
            <div className = "buttons"> 
            <button className = "message">Message</button>
            <button className = "follow">Follow</button>
            </div>
            </div>
            </div>
        
    )
}




export default Card