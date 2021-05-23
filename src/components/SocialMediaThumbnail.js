import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import '../styles/Global.css'

const SocialMediaThumbnail = (props) => {
    return (
        <a href={props.href} target="_blank">
            <div className={props.classNameProps} ><GatsbyImage image={props.image} alt="LinkedIn logo" /></div>
        </a>
    )
}

export default SocialMediaThumbnail
