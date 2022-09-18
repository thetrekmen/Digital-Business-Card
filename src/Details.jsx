import React from 'react';
import './Details.css';

export default function Details() {
    return (
        <div className='details-container'>
            <h1 className='details--name' >Patrick Jones</h1>
            <h4 className='details--title' >Front-end Developer</h4>
            <p className='details--email' >jonespm1.dev@gmail.com</p>
            <a className='email-submit' href="#" >
                <div className='email-submit--img' ></div>
                <p className='email-submit--text' >Email</p>
            </a>
            <h2 className="about-title" >About</h2>
            <p className="paragraph" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis magnam fuga qui ducimus incidunt aliquid dolorem. Cupiditate harum voluptatibus dolorum laborum enim nobis?</p>
            <h2 className="interest-title" >Interests</h2>
            <p className="paragraph" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis magnam fuga qui ducimus incidunt aliquid dolorem. Cupiditate harum voluptatibus dolorum laborum enim nobis?</p>
        </div>
    )
}