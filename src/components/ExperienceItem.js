import React from 'react'
import P from '../components/P'
import '../styles/Global.css'
import { GatsbyImage } from 'gatsby-plugin-image'

const ExperienceItem = (props) => {
    return (
        <div className="experience-grid">
            <div className="title"><P bold>{props.title}</P></div>
            <div className="date"><P gray>{props.date}</P></div>
            <div className="description"><P>{props.description}</P></div>
            <div className="logo"><GatsbyImage image={props.image} alt={props.alt}/></div>
        </div>
    )
}

export default ExperienceItem
