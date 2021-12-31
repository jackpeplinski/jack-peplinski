import React from 'react'
import P from '../components/P'
import '../styles/Global.css'
import { GatsbyImage } from 'gatsby-plugin-image'

const ExperienceItem = (props) => {
    return (
        <div style={{display: "flex", flexWrap: "wrap-reverse"}}>
            <div>
                <P bold>{props.title}</P>
                <P gray>{props.date}</P>
                <P>{props.description}</P>
            </div>
            <div>
                <GatsbyImage className="experience-item" imgClassName="experience-item" image={props.image} alt={props.alt}/>
            </div>
        </div>
    )
}

export default ExperienceItem
