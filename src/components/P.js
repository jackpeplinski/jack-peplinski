import React from 'react'
import styled from 'styled-components'

const P = ({gray, bold, padding, children}) => {
    return (
        <StyledP gray={gray} bold={bold} padding={padding}>{children}</StyledP>
    )
}

export default P

export const StyledP = styled.p`
    font-size: ${props => props.theme.fontSmall};
    font-family: ${props => props.theme.fontFamily};
    font-weight: ${props => props.bold ? "bold":"normal"};
    color: ${props => props.gray ? "#8B8B8B":"#000"};
    padding: ${props => props.padding ? "0 0 2% 0": "0"};
    margin: 0;
`