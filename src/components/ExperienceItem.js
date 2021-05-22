import React from 'react'
import P from '../components/P'
import { StaticImage } from 'gatsby-plugin-image'
import '../styles/Global.css'

const ExperienceItem = (props) => {
    return (
        <div className="experience-grid">
            <div className="title"><P bold>{props.title}</P></div>
            <div className="date"><P gray>{props.date}</P></div>
            <div className="description"><P>{props.description}</P></div>
            {console.log(props.src)}
            <div className="logo"><StaticImage src={props.src} alt={props.alt}/></div>
        </div>
    )
}

export default ExperienceItem
