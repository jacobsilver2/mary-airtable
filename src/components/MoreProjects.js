import React from 'react'
import styled from 'styled-components'

const StyledMoreProjectsContainer = styled.div`
    display: grid;
    margin-top: 10rem;
    border: 1px solid red;
    width: 100%;
    grid-template-columns: (auto-fit, minmax(250px, 1fr));
    /* grid-auto-flow: column; */
    justify-items: center;
`;

const WorkChild = styled.div`
    /* width: 10rem; */
`

const MoreProjects = () => {
    return (
        <StyledMoreProjectsContainer>
            <WorkChild>Image One</WorkChild>
            <WorkChild>Image Two</WorkChild>
            <WorkChild>Image Three</WorkChild>
            <WorkChild>Image Four</WorkChild>
        </StyledMoreProjectsContainer>
    )
}

export default MoreProjects;